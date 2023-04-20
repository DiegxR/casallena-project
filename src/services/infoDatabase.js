/*{ type: 0, percent: 30 }, descuento general
      { type: 1, percent: 50 }, descuento estudiantil
      { type: 2, percent: 60 }, descuento perfil casa llena */

export const filters = [
  {
    cod: 0,
    option: "Aporte voluntario",
    description: "Me filtra las obras con el aporte voluntario",
  },
  {
    cod: 1,
    option: "Hoy",
    description: "Me filtra las obras del día actual",
  },
  {
    cod: 2,
    option: "Mañana",
    description: "Me filtra las obras del día siguiente",
  },
  {
    cod: 3,
    option: "Desde 15K",
    description:
      "Me filtra las obras que se encuentre con un precio desde 15.000 pesos",
  },
  {
    cod: 4,
    option: "Desde 30K",
    description:
      "Me filtra las obras que se encuentre con un precio desde 30.000 pesos",
  },
  {
    cod: 5,
    option: "Desde 60K",
    description:
      "Me filtra las obras que se encuentre con un precio desde 60.000 pesos",
  },
  {
    cod: 6,
    option: "Tragedia",
    description:
      "Un género teatral que representa una historia seria y sombría que generalmente termina en desgracia o tragedia.",
  },
  {
    cod: 7,
    option: "Comedia",
    description:
      "Un género teatral que se centra en la risa y el humor, y que generalmente termina en un final feliz.",
  },
  {
    cod: 8,
    option: "Drama",
    description:
      "un género teatral que representa situaciones serias y emocionales que pueden ser tanto tristes como alegres.",
  },
  {
    cod: 9,
    option: "Musical",
    description:
      "un género teatral que combina la música, la danza y el canto para contar una historia.",
  },
  {
    cod: 10,
    option: "Experimental",
    description:
      "Un género teatral que se centra en la experimentación con diferentes formas, técnicas y estilos de actuación, a menudo con un enfoque en lo abstracto y lo no convencional.",
  },
  {
    cod: 11,
    option: "Crueldad",
    description:
      "Un género teatral desarrollado por el dramaturgo francés Antonin Artaud, que busca provocar una experiencia emocional y física intensa en el espectador a través de la violencia, el ruido y la exageración.",
  },
  {
    cod: 12,
    option: "Absurdo",
    description:
      "Un género teatral que presenta situaciones que parecen sin sentido o absurdas, a menudo con el objetivo de cuestionar la naturaleza de la realidad y de la existencia humana.",
  },
  {
    cod: 13,
    option: "Político",
    description:
      "Un género teatral que utiliza la representación escénica para explorar y criticar temas políticos y sociales.",
  },
  {
    cod: 14,
    option: "Calle",
    description:
      "un género teatral que se realiza en espacios públicos, como plazas y calles, y que a menudo involucra la participación del público.",
  },
  {
    cod: 15,
    option: "Memoria",
    description:
      "Es un género de teatro que se centra en las experiencias personales y en la memoria del autor o de los actores",
  },
  {
    cod: 16,
    option: "Época",
    description:
      "Un género teatral que se centra en representar situaciones, personajes y ambientes de una época o período histórico específico.",
  },
  {
    cod: 17,
    option: "Misterio",
    description:
      "Un género teatral que presenta una trama llena de suspenso y que tiene un final sorprendente o inesperado.",
  },
  {
    cod: 18,
    option: "Ciencia ficción",
    description:
      "Un género teatral que se enfoca en temas de ciencia ficción, como viajes en el tiempo, mundos alternativos y tecnología avanzada.",
  },
  {
    cod: 19,
    option: "Fantasía",
    description:
      "Un género teatral que se basa en elementos mágicos o sobrenaturales, como criaturas mitológicas y poderes sobrenaturales.",
  },
  {
    cod: 20,
    option: "Terror",
    description:
      "Un género teatral que busca asustar al espectador, generalmente a través de situaciones aterradoras o escenas violentas.",
  },
  {
    cod: 21,
    option: "Documental",
    description:
      "Un género teatral que se basa en eventos reales y que utiliza técnicas teatrales para contar historias verdaderas.",
  },
  {
    cod: 22,
    option: "Infantil",
    description:
      "un género teatral que está dirigido específicamente a niños y que utiliza técnicas teatrales para educar y entretener a un público joven.",
  },
  {
    cod: 23,
    option: "Improvisación",
    description:
      "Un género teatral en el que los actores crean la historia y los personajes sobre la marcha, sin un guión preestablecido",
  },
];

export const teatros = [
  {
    cod: 0,
    name: "Elemental Teatro",
    location: { lat: 6.2217993, long: -75.5021417 },
    salas: [
      {
        cod: 0,
        cantTotal: 50,
        cantDisp: 50,
        cantOcupados: 0,
      },
    ],
  },
  {
    cod: 1,
    name: "Pequeño Teatro",
    location: { lat: 6.2475208, long: -75.5616535 },
    salas: [
      {
        cod: 0,
        cantTotal: 50,
        cantDisp: 50,
        cantOcupados: 0,
      },
    ],
  },
  {
    cod: 2,
    name: "Teatro Metropolitano",
    location: { lat: 6.2430224, long: -75.5774573 },
    salas: [
      {
        cod: 0,
        cantTotal: 40,
        cantDisp: 40,
        cantOcupados: 0,
      },
    ],
  },
  {
    cod: 2,
    name: "Teatro Lido",
    location: { lat: 6.2523713, long: -75.5644412 },
    salas: [
      {
        cod: 0,
        cantTotal: 40,
        cantDisp: 40,
        cantOcupados: 0,
      },
    ],
  },
];

export const obras = [
  {
    cod: 0,
    name: "A la diestra de Dios Padre",
    img: "https://drive.google.com/uc?export=download&id=1ARy2IFPr3-U0HNQ6uSolRea6NRo1C3iK",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1Nkt5i7rKZ0v_2ge41VuKMtOAQsb37HCG",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1B6MhCTmi8sHt2UoUWRfxcLI5Ob1cDk6U",
    gendre: 1,
    description:
      "Respresentada desde 2002. Narra la historia de Peralta, un campesino a quien se le aparecen Jesús y San Pedro para retribuirle su generosidad con la gente de su pueblo.",
    dates: [
      {
        date: "13/04/2023",
        aforo: 60,
        sold: [],
        theater: 0,
        sala: 0,
      },
    ],
    desc: [],
    price: 0,
    aporte: 10000,
    score: 5,
    data: [
      {
        cod: 0,
        name: "Datos",
        description:
          "Una adaptación del cuento En la diestra de dios padre de Tomas Carrasquilla.",
        img: [
          "https://drive.google.com/uc?export=download&id=1eJoZQi3d7o-w6vkQ0jS0iNB1YUZHLn53",
          "https://drive.google.com/uc?export=download&id=1eqaJszrbUvIuJgGtZc0GpDfxuC-4GiGk",
          "https://drive.google.com/uc?export=download&id=1toAMzo6zs7wGW4p6GOEnV-ds8E3NKFHM",
        ],
        duration: 105,
        age: 0,
      },
      {
        cod: 1,
        name: "Lugar",
        location: { lat: "", long: "" },
        direccion: "Carrera 49 #45-67",
      },
      {
        cod: 2,
        name: "Avisos",
        infoPublico:
          "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
        infoTeatro:
          "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
      },
    ],
    comments: [],
  },
  {
    cod: 1,
    name: "O marinheiro",
    img: "https://drive.google.com/uc?export=download&id=1-dZcbn1hQNIeq7lAlMEXe-um_Y0TMWvl",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1JaI1NwMt431Dj3UEtcmDRD6pWPj7fYhh",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1Q5ilEk6mQhKjPKArVi_rgYdYvS75hs14",
    gendre: 2,
    description:
      "Es un canto de las profundas fuerzas interiores que mueven el extraño que nos habita, es una lírica de fuerzas ocultasada desde 2002. Narra la historia de Peralta, un campesino a quien se le aparecen Jesús y San Pedro para retribuirle su generosidad con la gente de su pueblo.",
    dates: [
      {
        date: "13/04/2023",
        aforo: 40,
        sold: [],
        theater: 0,
        sala: 1,
      },
      {
        date: "29/04/2023",
        aforo: 40,
        sold: [],
        sala: 0,
        theater: 0,
        sala: 1,
      },
      {
        date: "7/05/2023",
        aforo: 40,
        sold: [],
        theater: 0,
        sala: 1,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 30000,
    aporte: 0,
    score: 5,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Constituye otro gran experimento del teatro estático, tan caro al implacable cómico irlandés frecuentador de juegos y silencios. ",
        img: [
          "https://drive.google.com/uc?export=download&id=1eJoZQi3d7o-w6vkQ0jS0iNB1YUZHLn53",
          "https://drive.google.com/uc?export=download&id=1eqaJszrbUvIuJgGtZc0GpDfxuC-4GiGk",
          "https://drive.google.com/uc?export=download&id=1toAMzo6zs7wGW4p6GOEnV-ds8E3NKFHM",
        ],
        duration: 105,
        age: 0,
      },
      {
        cod: 1,
        name: "Lugar",
        location: { lat: "", long: "" },
        direccion: "Cl. 47 #4347, Medellín, La Candelaria",
      },
      {
        cod: 2,
        name: "Avisos",
        infoPublico:
          "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
        infoTeatro:
          "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
      },
    ],
    comments: [],
  },
  {
    cod: 2,
    name: "Rubia pero sencilla",
    img: "https://drive.google.com/uc?export=download&id=1Gl7Y9yjfGsFDCgyYVVrL3iWcZhk4ZVzs",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1JlHDqwCffj8U_kKskwer-R4hlbHYvgZO",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1VjxH7jiPc_Ni-NWE7JSkXG1eMKgMSd8d",
    gendre: 1,
    description:
      "Una comedia donde nos recuerda historias de la vida en el campo, espacios y oficios ya olvidados de nuestra ruralidad.",
    dates: [
      {
        date: "20/04/2023",
        aforo: 40,
        sold: [],
        theater: 2,
        sala: 0,
      },
      {
        date: "29/04/2023",
        aforo: 40,
        sold: [],
        sala: 0,
        theater: 2,
        sala: 0,
      },
      {
        date: "15/05/2023",
        aforo: 40,
        sold: [],
        theater: 2,
        sala: 0,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 70000,
    aporte: 0,
    score: 5,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Vicky Berrio una mujer extrovertida, sexy, atrevida y de risa estruendosa, presenta su stand-up comedy: Rubia, pero sencilla.",
        img: [
          "https://drive.google.com/uc?export=download&id=1tCxGvFcIYwMNJV1nffcu3viCAuWKWTO3",
          "https://drive.google.com/uc?export=download&id=1w5fhkjm5xWQlipEGq_0qsDTCguyhedKX",
          "https://drive.google.com/uc?export=download&id=1yxknBVmUeREAxQ0ABEJaAcVzn1akv5ZM",
        ],
        duration: 90,
        age: 1,
      },
      {
        cod: 1,
        name: "Lugar",
        location: { lat: "", long: "" },
        direccion: "Cl. 9 #43B - 80, Medellín, El Poblado",
      },
      {
        cod: 2,
        name: "Avisos",
        infoPublico:
          "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
        infoTeatro:
          "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
      },
    ],
    comments: [],
  },
  {
    cod: 3,
    name: "Antino",
    img: "https://drive.google.com/uc?export=download&id=1Gl7Y9yjfGsFDCgyYVVrL3iWcZhk4ZVzs",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1JlHDqwCffj8U_kKskwer-R4hlbHYvgZO",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1VjxH7jiPc_Ni-NWE7JSkXG1eMKgMSd8d",
    gendre: 2,
    description:
      "Entonces se levanta un poco, mirando a su amante, que ahora solo ama lo que nadie sabe.",
    dates: [
      {
        date: "20/04/2023",
        aforo: 40,
        sold: [],
        theater: 1,
        sala: 0,
      },
      {
        date: "29/04/2023",
        aforo: 40,
        sold: [],
        sala: 0,
        theater: 1,
        sala: 0,
      },
      {
        date: "15/05/2023",
        aforo: 40,
        sold: [],
        theater: 1,
        sala: 0,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 70000,
    aporte: 0,
    score: 5,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Un poema dramático firmado con su nombre y escrito originalmente en inglés. Está dedicado a la figura del joven amante del gran emperador Adriano y su supuesto suicidio.",
        img: [
          "https://drive.google.com/uc?export=download&id=1tCxGvFcIYwMNJV1nffcu3viCAuWKWTO3",
          "https://drive.google.com/uc?export=download&id=1w5fhkjm5xWQlipEGq_0qsDTCguyhedKX",
          "https://drive.google.com/uc?export=download&id=1yxknBVmUeREAxQ0ABEJaAcVzn1akv5ZM",
        ],
        duration: 90,
        age: 1,
      },
      {
        cod: 1,
        name: "Lugar",
        location: { lat: "", long: "" },
        direccion: "Cl. 47 #4347, Medellín, La Candelaria",
      },
      {
        cod: 2,
        name: "Avisos",
        infoPublico:
          "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
        infoTeatro:
          "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
      },
    ],
    comments: [],
  },
  {
    cod: 4,
    name: "El cadáver",
    img: "https://drive.google.com/uc?export=download&id=16ByrNdAuCHehvco_tYdt7fsdUYAWiKq8",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=16UjkBTaXAcwuxryANXYoOPy2UrLWnGIC",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1AmbH7NoX0B3OYSiqPD2-zFVKIp0Ig5ja",
    gendre: 2,
    description:
      "El teatro físico, el grotesco y un poco de humor son los recursos expresivos que dan cuerpo a El Cadáver.",
    dates: [
      {
        date: "20/04/2023",
        aforo: 40,
        sold: [],
        theater: 1,
        sala: 2,
      },
      {
        date: "29/04/2023",
        aforo: 40,
        sold: [],
        sala: 0,
        theater: 1,
        sala: 2,
      },
      {
        date: "15/05/2023",
        aforo: 40,
        sold: [],
        theater: 1,
        sala: 2,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 0,
    aporte: 10000,
    score: 5,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Pieza corta en dos actos que narra la historia de tres amigos y un sirviente que, luego de encontrarse en una glamurosa fiesta, descubren el cadáver de su anfitrión",
        img: [
          "https://drive.google.com/uc?export=download&id=1a4w9xzeM3-MPQR9S2EXuAhMC8WYFEZIb",
          "https://drive.google.com/uc?export=download&id=1esaDsSXMB1V3ms0vVGZpEZ7kxykTFfzG",
          "https://drive.google.com/uc?export=download&id=1wzAYdpKO-HuJrBTWoS4b9s_FeMoUv3mW",
        ],
        duration: 120,
        age: 1,
      },
      {
        cod: 1,
        name: "Lugar",
        location: { lat: "", long: "" },
        direccion: "Cl. 47 #4347, Medellín, La Candelaria",
      },
      {
        cod: 2,
        name: "Avisos",
        infoPublico:
          "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
        infoTeatro:
          "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
      },
    ],
    comments: [],
  },
  {
    cod: 5,
    name: "Nos mataron la risa",
    img: "https://drive.google.com/uc?export=download&id=19bEXdco4KRpODZyUH5iQYbP3VBQKB58j",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1FoqfS8rYBY5uREbGFaDjOt9r1dO-4P2Z",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1IciW6vnadNQm00cLZgJONTMv49--W8wd",
    gendre: 7,
    description:
      "Con la muerte de nuestros líderes, nos roban la alegría, la esperanza, el futuro.",
    dates: [
      {
        date: "20/04/2023",
        aforo: 40,
        sold: [],
        theater: 0,
        sala: 0,
      },
      {
        date: "29/04/2023",
        aforo: 40,
        sold: [],
        sala: 0,
        theater: 0,
        sala: 0,
      },
      {
        date: "15/05/2023",
        aforo: 40,
        sold: [],
        theater: 0,
        sala: 0,
      },
    ],
    desc: [{ type: 2, percent: 60 }],
    price: 80000,
    aporte: 0,
    score: 3,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Uno de los actos más grandes de indolencia en la historia de Colombia fue el asesinato de Jaime Garzón por parte de sicarios, paramilitares y fuerzas del estado.",
        img: [
          "https://drive.google.com/uc?export=download&id=1cuvbQzuTd6Xuu2PYeI3rIaSZi2Vwj2Bp",
          "https://drive.google.com/uc?export=download&id=1k649B_AiakeosJJkvCgB4XwVpTLIpCoS",
          "https://drive.google.com/uc?export=download&id=1ry4pDEOUu51FmNS59ehdjYnYfSRjTQ82",
        ],
        duration: 120,
        age: 1,
      },
      {
        cod: 1,
        name: "Lugar",
        location: { lat: "", long: "" },
        direccion: "Cl. 47 #42-38, Medellín, La Candelaria,",
      },
      {
        cod: 2,
        name: "Avisos",
        infoPublico:
          "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
        infoTeatro:
          "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
      },
    ],
    comments: [],
  },
  {
    cod: 4,
    name: "El cadáver",
    img: "https://drive.google.com/uc?export=download&id=16ByrNdAuCHehvco_tYdt7fsdUYAWiKq8",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=16UjkBTaXAcwuxryANXYoOPy2UrLWnGIC",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1AmbH7NoX0B3OYSiqPD2-zFVKIp0Ig5ja",
    gendre: 2,
    description:
      "El teatro físico, el grotesco y un poco de humor son los recursos expresivos que dan cuerpo a El Cadáver.",
    dates: [
      {
        date: "20/04/2023",
        aforo: 40,
        sold: [],
        theater: 1,
        sala: 0,
      },
      {
        date: "29/04/2023",
        aforo: 40,
        sold: [],
        sala: 0,
        theater: 1,
        sala: 0,
      },
      {
        date: "15/05/2023",
        aforo: 40,
        sold: [],
        theater: 1,
        sala: 0,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 0,
    aporte: 10000,
    score: 5,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Pieza corta en dos actos que narra la historia de tres amigos y un sirviente que, luego de encontrarse en una glamurosa fiesta, descubren el cadáver de su anfitrión",
        img: [
          "https://drive.google.com/uc?export=download&id=1a4w9xzeM3-MPQR9S2EXuAhMC8WYFEZIb",
          "https://drive.google.com/uc?export=download&id=1esaDsSXMB1V3ms0vVGZpEZ7kxykTFfzG",
          "https://drive.google.com/uc?export=download&id=1wzAYdpKO-HuJrBTWoS4b9s_FeMoUv3mW",
        ],
        duration: 120,
        age: 1,
      },
      {
        cod: 1,
        name: "Lugar",
        location: { lat: "", long: "" },
        direccion: "Cl. 47 #4347, Medellín, La Candelaria",
      },
      {
        cod: 2,
        name: "Avisos",
        infoPublico:
          "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
        infoTeatro:
          "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
      },
    ],
    comments: [],
  },
  {
    cod: 6,
    name: "La caida de los discursos ",
    img: "https://drive.google.com/uc?export=download&id=11RKVyB-mTzDnDCFo-tEtE3IjaOs7HKHd",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=11V8ZCO18kJAlBPBQAQKwvSnsAbPYFg__",
    imgPost:
      "https://drive.google.com/uc?export=download&id=18f_Wl4iHNiW1BMsXlZMq7QkwfkRbmkQY",
    gendre: 12,
    description:
      "Zeus encadena a Prometeo por haber robado el fuego y habérselo entregado a los hombres.  ",
    dates: [
      {
        date: "20/04/2023",
        aforo: 60,
        sold: [],
        theater: 0,
        sala: 0,
      },
      {
        date: "29/04/2023",
        aforo: 60,
        sold: [],
        sala: 0,
        theater: 0,
        sala: 0,
      },
      {
        date: "15/05/2023",
        aforo: 60,
        sold: [],
        theater: 0,
        sala: 0,
      },
    ],
    desc: [{ type: 2, percent: 60 }],
    price: 30000,
    aporte: 0,
    theater: 0,
    sala: 0,
    score: 3,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Uno de los actos más grandes de indolencia en la historia de Colombia fue el asesinato de Jaime Garzón por parte de sicarios, paramilitares y fuerzas del estado.",
        img: [
          "https://drive.google.com/uc?export=download&id=1HC7KuWvrrM4GdrcPaIKgHoDhs1yTZWcG",
          "https://drive.google.com/uc?export=download&id=11RKVyB-mTzDnDCFo-tEtE3IjaOs7HKHd",
          "https://drive.google.com/uc?export=download&id=18f_Wl4iHNiW1BMsXlZMq7QkwfkRbmkQY",
        ],
        duration: 120,
        age: 1,
      },
      {
        cod: 1,
        name: "Lugar",
        location: { lat: "", long: "" },
        direccion: "Cra 88 #39-31, Medellín, La América",
      },
      {
        cod: 2,
        name: "Avisos",
        infoPublico:
          "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
        infoTeatro:
          "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
      },
    ],
    comments: [],
  },
  {
    cod: 7,
    name: "A toda rueda",
    img: "https://drive.google.com/uc?export=download&id=1EkDD4gx_5hwjqKsKufdyyzuif3IGqxNL",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1K5huA_jQ9sh6pc6_OGSv_WqDxEA7duan",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1YRE_zYoWkE2ana3p8lO27djCZQ-zSP34",
    gendre: 2,
    description:
      "No nos hacemos responsables del contenido de nuestra imaginación. ",
    dates: [
      {
        date: "20/04/2023",
        aforo: 60,
        sold: [],
        theater: 0,
        sala: 0,
      },
      {
        date: "29/04/2023",
        aforo: 60,
        sold: [],
        sala: 0,
        theater: 0,
        sala: 0,
      },
      {
        date: "15/05/2023",
        aforo: 60,
        sold: [],
        theater: 0,
        sala: 0,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 50000,
    aporte: 0,
    theater: 0,
    sala: 0,
    score: 3,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Sin cambios de vestuario, sin escenografía, sin guiones o libretos, cuatro actores, un músico y un luminotécnico improvisan historias al mejor estilo cinematográfico.",
        img: [
          "https://drive.google.com/uc?export=download&id=1HC7KuWvrrM4GdrcPaIKgHoDhs1yTZWcG",
          "https://drive.google.com/uc?export=download&id=1MWxsP1-YeAeeIvK_L4H31ErRBm7ckPFS",
          "https://drive.google.com/uc?export=download&id=1OVw4p-6r0q9B9DbJEwtKtp8k8xHHVjvr",
        ],
        duration: 120,
        age: 1,
      },
      {
        cod: 1,
        name: "Lugar",
        location: { lat: "", long: "" },
        direccion: "Cl. 9 #43B - 80, Medellín, El Poblado,",
      },
      {
        cod: 2,
        name: "Avisos",
        infoPublico:
          "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
        infoTeatro:
          "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
      },
    ],
    comments: [],
  },
  {
    cod: 7,
    name: "La Casa de Bernarda Alba",
    img: "https://drive.google.com/uc?export=download&id=1EkDD4gx_5hwjqKsKufdyyzuif3IGqxNL",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1K5huA_jQ9sh6pc6_OGSv_WqDxEA7duan",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1YRE_zYoWkE2ana3p8lO27djCZQ-zSP34",
    gendre: 1,
    description:
      "La Casa de Bernarda Alba, la última obra maestra escrita por Federico García Lorca, en la que se conjugan con éxito la poesía con la naturalidad, la belleza con la verosimilitud, “Es poesía hecha carne”, como lo expresaba el poeta.",
    dates: [
      {
        date: "20/04/2023",
        aforo: 60,
        sold: [],
        theater: 0,
        sala: 0,
      },
      {
        date: "29/04/2023",
        aforo: 60,
        sold: [],
        sala: 0,
        theater: 0,
        sala: 0,
      },
      {
        date: "15/05/2023",
        aforo: 60,
        sold: [],
        theater: 0,
        sala: 0,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 50000,
    aporte: 0,
    score: 4,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Nuestra versión es una mirada enfática acerca del sufrimiento de los discriminados, los esclavizados de todo tipo, una mirada humana del totalitarismo, social, político y religioso. Somos fieles a las críticas y reflexiones sociales y políticas de Lorca; nos parece necesario encontrar el sustrato profundo en este clásico, la fuerza contestataria y la huella histórica revelada con estoicismo en esta pieza capital para el teatro universal; nos dejamos llevar plenamente de la mano sabia de Lorca que guía nuestro camino artístico en este montaje.",
        img: [
          "https://drive.google.com/uc?export=download&id=1HC7KuWvrrM4GdrcPaIKgHoDhs1yTZWcG",
          "https://drive.google.com/uc?export=download&id=1MWxsP1-YeAeeIvK_L4H31ErRBm7ckPFS",
          "https://drive.google.com/uc?export=download&id=1OVw4p-6r0q9B9DbJEwtKtp8k8xHHVjvr",
        ],
        duration: 90,
        age: 1,
      },
      {
        cod: 1,
        name: "Lugar",
        location: { lat: "", long: "" },
        direccion: "Cl. 9 #43B - 80, Medellín, El Poblado,",
      },
      {
        cod: 2,
        name: "Avisos",
        infoPublico:
          "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
        infoTeatro:
          "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
      },
    ],
    comments: [],
  },
  {
    cod: 7,
    name: "El inspector",
    img: "https://drive.google.com/uc?export=download&id=1EkDD4gx_5hwjqKsKufdyyzuif3IGqxNL",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1K5huA_jQ9sh6pc6_OGSv_WqDxEA7duan",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1YRE_zYoWkE2ana3p8lO27djCZQ-zSP34",
    gendre: 2,
    description:
      "La pieza original de Nikolai Gogol es un clásico de la dramaturgia rusa en donde se abordan temas que parecen réplicas de nuestra propia cultura, plasmadas en la sociedad rusa del siglo XIX.",
    dates: [
      {
        date: "20/04/2023",
        aforo: 60,
        sold: [],
        theater: 0,
        sala: 0,
      },
      {
        date: "29/04/2023",
        aforo: 60,
        sold: [],
        sala: 0,
        theater: 0,
        sala: 0,
      },
      {
        date: "15/05/2023",
        aforo: 60,
        sold: [],
        theater: 0,
        sala: 0,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 50000,
    aporte: 0,
    score: 3,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "En esta obra aparecen dibujados desde el funcionario de más alto rango y el alcalde del pueblo, hasta los cargos más bajos, los sirvientes. Sin embargo, la versión que verán en el teatro es una adaptación a la Latinoamérica contemporánea, en donde se resaltan aquellos aspectos de la cultura rusa que se replican en la nuestra; tales como la corrupción y la veneración por lo extranjero.",
        img: [
          "https://drive.google.com/uc?export=download&id=1HC7KuWvrrM4GdrcPaIKgHoDhs1yTZWcG",
          "https://drive.google.com/uc?export=download&id=1MWxsP1-YeAeeIvK_L4H31ErRBm7ckPFS",
          "https://drive.google.com/uc?export=download&id=1OVw4p-6r0q9B9DbJEwtKtp8k8xHHVjvr",
        ],
        duration: 90,
        age: 1,
      },
      {
        cod: 1,
        name: "Lugar",
      },
      {
        cod: 2,
        name: "Avisos",
        infoPublico:
          "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
        infoTeatro:
          "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
      },
    ],
    comments: [],
  },
  {
    cod: 7,
    name: "Lloro Sólo por Verte Triste",
    img: "",
    imgDetail:
      "",
    imgPost:
      "",
    gender: 2,
    description:
      "Lloro solo por verte triste, es una puesta en escena que recorre poéticamente pensamientos, sentimientos y sensaciones de algunos heterónimos de Fernando Pessoa.",
    dates: [
      {
        date: "20/04/2023",
        aforo: 60,
        sold: [],
        theater: 0,
        sala: 0,
      },
      {
        date: "29/04/2023",
        aforo: 60,
        sold: [],
        sala: 0,
        theater: 0,
        sala: 0,
      },
      {
        date: "15/05/2023",
        aforo: 60,
        sold: [],
        theater: 0,
        sala: 0,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 50000,
    aporte: 0,
    score: 3,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "El misterio, el amor, el silencio, la muerte, están presentes en este acto ceremonial y teatral en el que cada espectador podrá adentrarse en sus abismos existenciales.",
        img: [
          "",
          "",
          "",
        ],
        duration: 50,
        age: 1,
      },
      {
        cod: 1,
        name: "Lugar",
      },
      {
        cod: 2,
        name: "Avisos",
        infoPublico:
          "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
        infoTeatro:
          "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
      },
    ],
    comments: [],
  },
];
