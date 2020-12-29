<template>
    <div class="vendor-filter__album">
        <h3 class="vendor-filter__album-char">{{ album.char }}</h3>
        <div v-for="photo of album.photos" :key="photo.id" class="vendor-filter__item">
            <img :src="photo.thumbnailUrl" class="vendor-filter__item-photo">
            <p class="vendor-filter__item-name">{{ photo.name }}</p>
            <button
                v-if="photo.featured"
                @click="clickHandler(album.id, photo.id)"
                type="button"
                class="vendor-filter__item-btn vendor-filter__item-btn-clear"
            ></button>
            <button
                v-else
                @click="clickHandler(album.id, photo.id)"
                type="button"
                class="vendor-filter__item-btn vendor-filter__item-btn-featured"
            ></button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        album: {
            type: Object,
            required: true,
        }
    },

    methods: {
        ...mapMutations({
            setFeaturedPhoto: 'albums/setFeaturedPhoto',
        }),

        clickHandler(albumID, photoID) {
            this.setFeaturedPhoto({
                albumID,
                photoID,
            });
        },
    },
};
</script>

<style lang="scss">
.vendor-filter {
    &__album {
        margin-bottom: 2.6rem;
        break-inside: avoid;
    }

    &__album-char {
        width: 52px;
        margin: 0 0 .8rem 0;
        font-size: 1.2rem;
        line-height: 1.6rem;
        font-weight: 700;
        text-align: center;
        color: #1B204F;
    }

    &__item {
        display: flex;
        align-items: center;
        padding: 4px;
        border-radius: .8rem;
        transition: background-color .2s ease-in-out;
        background-color: #F7F8F9;
    }

    &__item:hover {
        background-color: darken(#f7f8f9, 5%);
    }

    &__item + &__item {
        margin-top: .8rem;
    }

    &__item-photo {
        width: 32px;
        height: 32px;
        border-radius: .8rem;
    }

    &__item-name {
        margin: 0 auto 0 1.1rem;
        font-size: 1.2rem;
        color: #1B204F;
    }

    &__item-btn {
        width: 28px;
        height: 28px;
        background-color: transparent;
        border: none;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 18px 18px;
        transition: opacity .2s ease-in-out;
        opacity: 0;
        cursor: pointer;
    }

    &__item:hover &__item-btn {
        opacity: 1;
    }

    &__item-btn-featured {
        background-image: url(../static/img/featured-icon.svg);
    }

    &__item-btn-clear {
        background-image: url(../static/img/clear-icon.svg);
    }
}
</style>
