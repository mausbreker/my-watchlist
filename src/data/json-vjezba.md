- u data folderu napraviti json file (movies.json)
[
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        isFavorite: false,
        imagePath: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
        rating: 9.2
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        isFavorite: false,
        imagePath: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
        rating: 9.2
    },
    {
        id: 3,
        title: "Forrest Gump",
        year: 1994,
        isFavorite: false,
        imagePath: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
        rating: 8.8
    },
    {
        id: 4,
        title: "The Silence of the Lambs",
        year: 1991,
        isFavorite: true,
        imagePath: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
        rating: 8.6
    },
    {
        id: 5,
        title: "The Green Mile",
        year: 1999,
        isFavorite: false,
        imagePath: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UY67_CR0,0,45,67_AL_.jpg",
        rating: 8.6
    }
]

- unutar Main.js-a importati filmove iz json fajla
- unutar Main.js-a treba izrenderati sve filmove iz uključenog json fajla, a izrenderani HTML treba izgledati ovako:
<article>
    <img src="" alt="" />
    <h6>Movie title</h6>
    <button>
        Dodaj u favorite / Makni iz favorita
    </button>
</article>