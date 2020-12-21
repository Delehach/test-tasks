<template>
    <div class="vendor-filter">
        <div class="vendor-filter__header">
            Фильтр:
            <span
                :class="['vendor-filter__name', {'is-active' : filterVal === 'all'}]"
                @click="setFilter('all')"
            >
                По альбомам
            </span>
            <span
                :class="['vendor-filter__name', {'is-active' : filterVal === 'featured'}]"
                @click="setFilter('featured')"
            >
                Избранное
            </span>
        </div>
        <div class="vendor-filter__scroll">
            <div class="vendor-filter__albums-list" v-if="!$fetchState.pending">
                <VendorFilterAlbum
                    v-for="album of albums"
                    :key="album.char"
                    :album="album"
                >
                </VendorFilterAlbum>
            </div>
            <div v-else class="vendor-filter__loader"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import VendorFilterAlbum from '@/components/vendor-filter-album';

export default {
    components: {
        VendorFilterAlbum,
    },

    computed: {
        ...mapGetters({
            albums: 'albums/getAlbums',
            filterVal: 'albums/getFilterVal',
        }),
    },

    async fetch () {
        const { store } = this.$nuxt.context;
        if (this.albums.length === 0) {
            await store.dispatch('albums/fetch');
        }
    },

    methods: {
        ...mapMutations({
            setFilter: 'albums/setFilter',
        }),
    },
};
</script>

<style lang="scss">
.vendor-filter {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-family: Open Sans, Roboto, sans-serif;
    max-width: 1300px;
    width: 100%;
    height: 600px;
    margin: auto;
    padding: 3.6rem 6rem 6rem;
    font-size: 1.2rem;
    background: #ffffff;
    border-radius: 1.2rem;
    box-sizing: border-box;

    &__header {
        flex-shrink: 0;
        margin: 0 0 1.8rem;
        font-weight: bold;
        font-size: 1.4rem;
        line-height: 1.9rem;
        color: #1B204F;
    }

    &__name {
        margin: 0 0.5rem;
        text-decoration: underline;
        cursor: pointer;
        color: #1B204F;
    }

    &__name.is-active {
        color: #901111;
    }

    &__name:hover {
        text-decoration: none;
    }

    &__scroll {
        height: 100%;
        overflow-y: scroll;
    }

    &__albums-list {
        position: relative;
        column-count: 3;
        column-gap: 4.4rem;
    }

    &__loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
    }

    &__loader:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #000;
        border-color: #000 transparent #000 transparent;
        animation: loader 1.2s linear infinite;
    }

    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media only screen and (min-width: 768px) {
        .vendor-filter__albums-list {
            column-count: 2;
        }
    }

    @media only screen and (min-width: 950px) {
        .vendor-filter__albums-list {
            column-count: 3;
        }
    }

    @media only screen and (min-width: 1280px) {
        .vendor-filter__albums-list {
            column-count: 4;
        }
    }

}
</style>
