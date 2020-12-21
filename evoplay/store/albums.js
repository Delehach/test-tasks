export const state = () => ({
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    albums: JSON.parse(localStorage.getItem('albums')) ?? [],
    filter: localStorage.getItem('albums_filter') ?? 'all',
});

export const getters = {
    getAlbums: state => {
        const filterVal = state.filter === 'all';
        return state.albums.reduce((acc, album) => {
            const featuredPhotos = album.photos.filter(photo => photo.featured !== filterVal);
            if (!!featuredPhotos.length) {
                acc.push({
                    ...album,
                    photos: featuredPhotos,
                });
                return acc;
            }
            return acc;
        }, []);
    },

    getFilterVal: state => state.filter,
};

export const mutations = {
    setAlbums(state, albums) {
        state.albums = albums;
        localStorage.setItem('albums', JSON.stringify(albums));
    },

    setFeaturedPhoto(state, {albumID, photoID}) {
        const newAlbums = state.albums.map(album => {
            if (album.id === albumID) {
                return {
                    ...album,
                    photos: album.photos.map(photo => {
                        if (photo.id === photoID) {
                            return {
                                ...photo,
                                featured: !photo.featured,
                            }
                        }
                        return photo;
                    })
                }
            }
            return album;
        });

        state.albums = newAlbums;
        localStorage.setItem('albums', JSON.stringify(newAlbums));
    },

    setFilter(state, value = 'all') {
        state.filter = value;
        localStorage.setItem('albums_filter', value.toString());
    }
};

export const actions = {
    async fetch({state, commit}) {
        const generateAlbumLength = () => {
            const minLength = 5;
            const maxLength = 10;
            return Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
        };

        try {
            const data = await fetch('http://jsonplaceholder.typicode.com/photos');
            const res = await data.json();

            const albums = state.alphabet.split('').map((char, i) => {
                const maxAlbumLength = generateAlbumLength();
                const album = res.filter(album => album.albumId === i+1).map(photo => (
                    {
                        ...photo,
                        featured: false,
                        name: char.concat(photo.title.split(' ')[0]),
                    }
                ));

                return {
                    id: i+1,
                    char,
                    photos: new Array(maxAlbumLength).fill('').map((_, j) => album[j]),
                };
            });

            commit('setAlbums', albums);
        } catch (e) {
            console.error(`Fetch photos failed with error: ${e.message}`);
        }
    },
};
