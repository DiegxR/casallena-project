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
    name: "Pequeño teatro",
    location: { lat: "", long: "" },
    direccion: "Cl. 47 #4347, Medellín, La Candelaria",
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
    name: "Teatro Matacandelas",
    location: { lat: "", long: "" },
    direccion: "Cl. 47 #4347, Medellín, La Candelaria",
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
    name: "Acción Impro",
    location: { lat: "", long: "" },
    direccion: "Cl. 9 #43B - 80, Medellín, El Poblado,",
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
    cod: 3,
    name: "Teatro hora 25",
    location: { lat: "", long: "" },
    direccion: "Cra 88 #39-31, Medellín, La América",
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
    cod: 4,
    name: "Casa contenta",
    location: { lat: "", long: "" },
    direccion: "Cra. 35 Este # 19-223, Medellín, Santa Elena, Medellín",
    salas: [
      {
        cod: 0,
        cantTotal: 40,
        cantDisp: 40,
        cantOcupados: 0,
      },
    ],
  },
]
export const obras = [
  {
    cod: 0,
    name: "A la diestra de Dios Padre",
    img: "https://drive.google.com/uc?export=download&id=1ARy2IFPr3-U0HNQ6uSolRea6NRo1C3iK",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1Nkt5i7rKZ0v_2ge41VuKMtOAQsb37HCG",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1eJoZQi3d7o-w6vkQ0jS0iNB1YUZHLn53",
    gender: 1,
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
          "https://drive.google.com/uc?export=download&id=1Nkt5i7rKZ0v_2ge41VuKMtOAQsb37HCG",
          "https://drive.google.com/uc?export=download&id=1eqaJszrbUvIuJgGtZc0GpDfxuC-4GiGk",
          "https://drive.google.com/uc?export=download&id=1toAMzo6zs7wGW4p6GOEnV-ds8E3NKFHM",
        ],
        duration: 105,
        age: 0,
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
    cod: 1,
    name: "O marinheiro",
    img: "https://drive.google.com/uc?export=download&id=1Q5ilEk6mQhKjPKArVi_rgYdYvS75hs14",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1JaI1NwMt431Dj3UEtcmDRD6pWPj7fYhh",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1kauIkGdMHOZL2C9IZopIO18NxSmnTUFI",
    gender: 2,
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
          "https://drive.google.com/uc?export=download&id=1ayrYPOfSc3elfhC3dOa-2hKs4dlTMm3z",
          "https://drive.google.com/uc?export=download&id=1-dZcbn1hQNIeq7lAlMEXe-um_Y0TMWvl",
          "https://drive.google.com/uc?export=download&id=1hsP1WrIgUz_uQJyqg-mbExbCucQ0N2O3",
        ],
        duration: 105,
        age: 0,
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
    cod: 2,
    name: "Rubia pero sencilla",
    img: "https://drive.google.com/uc?export=download&id=1VjxH7jiPc_Ni-NWE7JSkXG1eMKgMSd8d",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1JlHDqwCffj8U_kKskwer-R4hlbHYvgZO",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1Gl7Y9yjfGsFDCgyYVVrL3iWcZhk4ZVzs",
    gender: 1,
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
    img: "https://drive.google.com/uc?export=download&id=11OTBDF3tzK62zwmutxWoQK-xou4BRIj-",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1w_3sd8ynH4AJBP07GwLcSQ-odSImLOWd",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1f3QXR411jhIp_i3RTabltLgL4daNcGOF",
    gender: 2,
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
          "https://drive.google.com/uc?export=download&id=1YW1Ocjroh_iHL9alV-eiKbJPWQmSIG59",
          "https://drive.google.com/uc?export=download&id=1w5fhkjm5xWQlipEGq_0qsDTCguyhedKX",
          "https://drive.google.com/uc?export=download&id=1Kp_xsFfWP3P3jxL75tzODA5-U9Om7ZOV",
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
    cod: 4,
    name: "El cadáver",
    img: "https://drive.google.com/uc?export=download&id=1wzAYdpKO-HuJrBTWoS4b9s_FeMoUv3mW",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=16UjkBTaXAcwuxryANXYoOPy2UrLWnGIC",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1AmbH7NoX0B3OYSiqPD2-zFVKIp0Ig5ja",
    gender: 2,
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
          "https://drive.google.com/uc?export=download&id=16UjkBTaXAcwuxryANXYoOPy2UrLWnGIC",
          "https://drive.google.com/uc?export=download&id=1esaDsSXMB1V3ms0vVGZpEZ7kxykTFfzG",
        ],
        duration: 120,
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
    cod: 5,
    name: "Nos mataron la risa",
    img: "https://drive.google.com/uc?export=download&id=1IciW6vnadNQm00cLZgJONTMv49--W8wd",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1ry4pDEOUu51FmNS59ehdjYnYfSRjTQ82",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1cuvbQzuTd6Xuu2PYeI3rIaSZi2Vwj2Bp",
    gender: 7,
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
          "https://drive.google.com/uc?export=download&id=1k649B_AiakeosJJkvCgB4XwVpTLIpCoS",
          "https://drive.google.com/uc?export=download&id=1FoqfS8rYBY5uREbGFaDjOt9r1dO-4P2Z",
          "https://drive.google.com/uc?export=download&id=19bEXdco4KRpODZyUH5iQYbP3VBQKB58j",
        ],
        duration: 120,
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
    cod: 6,
    name: "El cadáver",
    img: "https://drive.google.com/uc?export=download&id=16ByrNdAuCHehvco_tYdt7fsdUYAWiKq8",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=16UjkBTaXAcwuxryANXYoOPy2UrLWnGIC",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1AmbH7NoX0B3OYSiqPD2-zFVKIp0Ig5ja",
    gender: 2,
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
    cod: 7,
    name: "La caida de los discursos ",
    img: "https://drive.google.com/uc?export=download&id=11V8ZCO18kJAlBPBQAQKwvSnsAbPYFg__",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1HC7KuWvrrM4GdrcPaIKgHoDhs1yTZWcG",
    imgPost:
      "https://drive.google.com/uc?export=download&id=18f_Wl4iHNiW1BMsXlZMq7QkwfkRbmkQY",
    gender: 12,
    description:
      "Zeus encadena a Prometeo por haber robado el fuego y habérselo entregado a los hombres.  ",
    dates: [
      {
        date: "20/04/2023",
        aforo: 60,
        sold: [],
        theater: 3,
        sala: 0,
      },
      {
        date: "29/04/2023",
        aforo: 60,
        sold: [],
        sala: 0,
        theater: 3,
        sala: 0,
      },
      {
        date: "15/05/2023",
        aforo: 60,
        sold: [],
        theater: 3,
        sala: 0,
      },
    ],
    desc: [{ type: 2, percent: 60 }],
    price: 30000,
    aporte: 0,
    score: 3,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Es una obra inspirada en el poema Prometheus de Goethe. Encontraremos un Prometeo que defendiendo la liberación del ser humano se enfrenta y desafía a Zeus.",
        img: [
          "https://drive.google.com/uc?export=download&id=1HC7KuWvrrM4GdrcPaIKgHoDhs1yTZWcG",
          "https://drive.google.com/uc?export=download&id=18f_Wl4iHNiW1BMsXlZMq7QkwfkRbmkQY",
          "hhttps://drive.google.com/uc?export=download&id=11RKVyB-mTzDnDCFo-tEtE3IjaOs7HKHd",
        ],
        duration: 120,
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
    cod: 8,
    name: "A toda rueda",
    img: "https://drive.google.com/uc?export=download&id=1dBLmaPVYU-lXwyhJ6skDD5F2HVhvB1d4",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1EkDD4gx_5hwjqKsKufdyyzuif3IGqxNL",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1YRE_zYoWkE2ana3p8lO27djCZQ-zSP34",
    gender: 2,
    description:
      "No nos hacemos responsables del contenido de nuestra imaginación.",
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
          "Sin cambios de vestuario, sin escenografía, sin guiones o libretos, cuatro actores, un músico y un luminotécnico improvisan historias al mejor estilo cinematográfico.",
        img: [
          "https://drive.google.com/uc?export=download&id=1lb8DBs1cTZgKyS6Ck0KzxIXADOQ6LO21",
          "https://drive.google.com/uc?export=download&id=1MWxsP1-YeAeeIvK_L4H31ErRBm7ckPFS",
          "https://drive.google.com/uc?export=download&id=1K5huA_jQ9sh6pc6_OGSv_WqDxEA7duan",
        ],
        duration: 120,
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
    cod: 9,
    name: "La Casa de Bernarda Alba",
    img: "https://drive.google.com/uc?export=download&id=1g8MVtBcTwdF06gZMzVccNqKd_Y9bhdmY",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1MEXB7O-NXEmUwuIpByK73ysVUOabegtg",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1qaCX7mb22BqaNfD8WaVJuIpWcryTTt8Z",
    gender: 1,
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
          "Nuestra versión es una mirada enfática acerca del sufrimiento de los discriminados, los esclavizados de todo tipo, una mirada humana del totalitarismo, social, político y religioso. Somos fieles a las críticas y reflexiones sociales y políticas de Lorca; nos parece necesario encontrar el sustrato profundo en este clásico, la fuerza contestataria y la huella histórica revelada con estoicismo en esta pieza capital para el teatro universal.",
        img: [
          "https://drive.google.com/uc?export=download&id=1HTnzz3-zmvpywZk03dEjjt61y9vjKfCv",
          "https://drive.google.com/uc?export=download&id=1zRxsSeZp_M8fKGButCYb1fUdoD38LZhZ",
          "https://drive.google.com/uc?export=download&id=1bP4ZGGfFlyCo5KcnH15mV88vLYf7OH_d",
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
    cod: 10,
    name: "El inspector",
    img: "https://drive.google.com/uc?export=download&id=1gvUjFJmwfwj0eOtVQ-0i1NH79fvbTS2e",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1-Y1WpbJK0NTdiUV2-FeXDb3hWxFXGbft",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1NLBc9rg4SiPs0BdaOlzfdAanYfwfbYFf",
    gender: 2,
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
          "https://drive.google.com/uc?export=download&id=1NAsgxDd3tmraiMZEg_QXQCV8tB3ruMRs",
          "https://drive.google.com/uc?export=download&id=1tU81Bzi5EbZdU0lrfj1JRsrq9Dlu0KVe",
          "https://drive.google.com/uc?export=download&id=1-Y1WpbJK0NTdiUV2-FeXDb3hWxFXGbft",
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
    cod: 11,
    name: "Angelitos Empantanados",
    img: "https://drive.google.com/uc?export=download&id=1aEIvGKsPpyUcN84qof3TMfbYkSms8Lb5",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1RwJyxcie_XSz8y3GmObOYhefqLhF61WX",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1yevRU6PxjQrXX-My511AJibJZnIYtyXR",
    gender: 1,
    description:
      "La novela se compone de tres extensos monólogos: El pretendiente, Angelita y Miguel Ángel y El tiempo de la ciénaga, que configuran la historia de dos jóvenes colegiales, Angelita Rodante y Miguel Ángel Valderrama, pertenecientes a la burguesía caleña de finales de los años 60.",
    dates: [
      {
        date: "28/04/2023",
        aforo: 70,
        sold: [],
        theater: 1,
        sala: 0,
      },
      {
        date: "30/04/2023",
        aforo: 70,
        sold: [],
        sala: 0,
        theater: 1,
        sala: 0,
      },
      {
        date: "10/05/2023",
        aforo: 70,
        sold: [],
        theater: 1,
        sala: 0,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 60000,
    aporte: 0,
    score: 5,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "La novela Angelitos empantanados se compone de tres extensos monólogos: El pretendiente, Angelita y Miguel Ángel y El tiempo de la ciénaga, que configuran la historia de dos jóvenes colegiales, Angelita Rodante y Miguel Ángel Valderrama, pertenecientes a la burguesía caleña de finales de los años 60.",
        img: [
          "https://drive.google.com/uc?export=download&id=185TusrzWIzyWjSSeXswu4jcqoEUqhy2J",
          "https://drive.google.com/uc?export=download&id=1CAbUz7cF7RJ5A1WA9dlIF9GwGdDKMrQd",
          "https://drive.google.com/uc?export=download&id=1GFDSNqDOqWdsJ-d84Pqqs66gVaw2NBAg",
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
    cod: 12,
    name: "Principito",
    img: "https://drive.google.com/uc?export=download&id=1SNKRS4OkasKtpcObs-I3GoxLZUUCDnHv",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1jEY4nWYejDdv0hdb29Uqfe_4GhdEfSC5",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1FevHjdpNpytw92h4cwSIGPQV3y9CHG-n",
    gender: 1,
    description:
      "Es la novela más famosa del escritor francés Antoine de Saint Exupéry. Fue publicada en el año 1943 y es el libro francés más leído y traducido de la historia.",
    dates: [
      {
        date: "20/04/2023",
        aforo: 50,
        sold: [],
        theater: 0,
        sala: 0,
      },
      {
        date: "22/04/2023",
        aforo: 50,
        sold: [],
        sala: 0,
        theater: 0,
        sala: 0,
      },
      {
        date: "1/05/2023",
        aforo: 50,
        sold: [],
        theater: 0,
        sala: 0,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 40000,
    aporte: 0,
    score: 5,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Un piloto sufre un accidente en el desierto y se encuentra con un niño, a quien llama el Principito y quien le cuenta sobre todos los planetas que ha visitado y las decepciones que ha tenido",
        img: [
          "https://drive.google.com/uc?export=download&id=1d7PXPmRVulTsMciefqk84BQxJRPhThTf",
          "https://drive.google.com/uc?export=download&id=1SDdsfopxZ7daUKh6h7OmAu1kKiqCHJ5p",
          "https://drive.google.com/uc?export=download&id=17NwHlTOxMsqF5Wuer33v83yBMMJAPjKl",
        ],
        duration: 60,
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
    cod: 13,
    name: "Incendios",
    img: "https://drive.google.com/uc?export=download&id=1l7ee7a5UU8_zoDVOFNwrhxKu7JjbakHl",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1Xi1SOr-SD9CJViGf_P0mfr7Q0zhBs1VJ",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1wSmgHfCFfnnoGszLGmkt8RxTNV3zlhAV",
    gender: 1,
    description:
      "Incendios de Wajdi Mouawad es una obra que habla de la resistencia, del poder de la palabra, del oprobio de la guerra; que tiene el poder de confrontarnos con esas realidades compartidas por todos los pueblos que hemos vivido la guerra;",
    dates: [
      {
        date: "20/04/2023",
        aforo: 50,
        sold: [],
        theater: 0,
        sala: 0,
      },
      {
        date: "22/04/2023",
        aforo: 50,
        sold: [],
        sala: 0,
        theater: 0,
        sala: 0,
      },
      {
        date: "1/05/2023",
        aforo: 50,
        sold: [],
        theater: 0,
        sala: 0,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 40000,
    aporte: 0,
    score: 5,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Se precisa una voluntad consciente y determinante para recordar y testimoniar la sangre derramada de una guerra suspendida en el tiempo. Incendios, no es una obra lejana, es una obra increíblemente cercana a lo que ha sido el conflicto armado en Colombia.",
        img: [
          "https://drive.google.com/uc?export=download&id=1fARUW4skT8OfSaiHQBP2xfrK64b4YMhi",
          "https://drive.google.com/uc?export=download&id=1DarfNCeFS4vMSJM35IxPEZNlq-lZmJFz",
          "https://drive.google.com/uc?export=download&id=1YaasTIC1vY8ukg3mFr6bQXAyVu1bhzn3",
        ],
        duration: 180,
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
    cod: 14,
    name: "El Gato Negro",
    img: "https://drive.google.com/uc?export=download&id=1XSapygITsMo83Cl5q9ucZMUZVnmenr95",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1oLqKAGj7piykKqkSpJezycC3TbuNZh7e",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1o6dbQNRr8yFX9kJvmRxzEsIQhQKwLqd3",
    gender: 1,
    description:
      "Es una pieza literaria del escritor estadounidense Edgar Allan Poe.",
    dates: [
      {
        date: "2/05/2023",
        aforo: 50,
        sold: [],
        sala: 0,
        theater: 4,
        sala: 0,
      },
      {
        date: "10/05/2023",
        aforo: 50,
        sold: [],
        theater: 4,
        sala: 0,
      },
    ],
    desc: [{ type: 0, percent: 30 }],
    price: 70000,
    aporte: 0,
    score: 5,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Este relato nos seduce con todo ese encanto mágico, enigmático y supersticioso que se le atribuye a la figura del Gato y que en el cuento se convierte en ajusticiador.",
        img: [
          "https://drive.google.com/uc?export=download&id=1VKgrFEjjJE2454AZlTAHK8mH_MO_z1im",
          "https://drive.google.com/uc?export=download&id=12ZLLGi2WP2V8uo5CmLhAgvLKzVH4tZE5",
          "https://drive.google.com/uc?export=download&id=1uh_prbFXDST2ro0xhQKZCKnmuDr0lCgC",
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
  {
    cod: 15,
    name: "Lloro Sólo por Verte Triste",
    img: "https://drive.google.com/uc?export=download&id=17tWhAZ0amQSnKtrXugSSokjvYvyOFrOu",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=16Kj_vvC7d3cRNFQ80dDV0HP3S_3_Bevc",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1A4Mu7vfqF-437vWAheshxZ_Yfd-0Ex9V",
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
          "https://drive.google.com/uc?export=download&id=1kXiIzNDZdxDaZLGYLHVgdL7UsZpXlCxk",
          "https://drive.google.com/uc?export=download&id=1yvMUy0A0KDBtLe9WROO2ojiyd3RWCRV1",
          "https://drive.google.com/uc?export=download&id=1089lnIRTKVuRyVU44HUUGPOgrpFznLpA",
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
  {
    cod: 16,
    name: "Diálogo en el Jardín de Palacio",
    img: "https://drive.google.com/uc?export=download&id=1gUIpY8w8twyYYd3VLVcaHzAraMkbtJN8",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1mKEdFPBOo7v0PrZ1ALSuHuEi31-K91QU",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1yJuhjaIaQZEMvdUVBoaFTKwDmVxhnCjI",
    gender: 2,
    description: "Diálogo en el Jardín de Palacio es un drama en gente.",
    dates: [
      {
        date: "27/04/2023",
        aforo: 60,
        sold: [],
        theater: 4,
        sala: 0,
      },
      {
        date: "26/04/2023",
        aforo: 60,
        sold: [],
        sala: 0,
        theater: 4,
        sala: 0,
      },
      {
        date: "20/05/2023",
        aforo: 60,
        sold: [],
        theater: 4,
        sala: 0,
      },
    ],
    desc: [{ type: 1, percent: 50 }],
    price: 0,
    aporte: 15000,
    score: 4,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "El tiempo cronológico se ha detenido en un instante tal vez pretérito, tal vez presente o tal vez futuro, de ahí la permanencia de estos seres en un espacio onírico o real.",
        img: [
          "https://drive.google.com/uc?export=download&id=1oOLQs0pgm79rqhJyjBxvnszyLbIqml6-",
          "https://drive.google.com/uc?export=download&id=1io1Zt1KK8OfSDcOkiZH7NzEYZbaJJZTT",
          "https://drive.google.com/uc?export=download&id=1-BHvYEj2wADUuQau6AxIQnWg2atYTZI7",
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
  {
    cod: 17,
    name: "Sueño Landia",
    img: "https://drive.google.com/uc?export=download&id=1wCmukRAdpyO8avW9i5-O3U4KX-Btaw6X",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1KeASCUOU8t5uXF2ikKzcydLQ9BX-nrPe",
    imgPost:
      "https://drive.google.com/uc?export=download&id=14A3JLKGbOUF1QSlRD-3j8F0ogKKrlsC3",
    gender: 19,
    description: "Un mundo de sueños para improvisar y soñar",
    dates: [
      {
        date: "30/04/2023",
        aforo: 20,
        sold: [],
        theater: 2,
        sala: 0,
      },
      {
        date: "7/05/2023",
        aforo: 40,
        sold: [],
        theater: 2,
        sala: 0,
      },
    ],
    desc: [{ type: 2, percent: 60 }],
    price: 0,
    aporte: 15000,
    score: 5,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Historias Fantástica, improvisaciones en las que los niños participan, música, luces y un nuevo mundo por descubrir.",
        img: [
          "https://drive.google.com/uc?export=download&id=1vqwArd7Wj9O54cfbFQyMohtGGWKcGo29",
          "https://drive.google.com/uc?export=download&id=10CJX7PVXdXYtsANFVUUOB9AlM9zW2c78",
          "https://drive.google.com/uc?export=download&id=15FgzVI1uy1I0Np9sapq_DtdApRcwr57s",
        ],
        duration: 60,
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
    cod: 18,
    name: "La última orgía",
    img: "https://drive.google.com/uc?export=download&id=11e5gWHUUv1FG6bquu-K6tJ8hmBPI-kOg",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1LjFzulFM0rmN8nckVHm1OhglvQKUu2yO",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1VFChL78ND2SGBlaUE6IJ43NYB4ruIDNf",
    gender: 7,
    description:
      "Esta será la última vez y usted puede ser el testigo de excepción de esta particular orgía",
    dates: [
      {
        date: "20/04/2023",
        aforo: 20,
        sold: [],
        theater: 0,
        sala: 0,
      },
      {
        date: "5/05/2023",
        aforo: 10,
        sold: [],
        theater: 0,
        sala: 0,
      },
    ],
    desc: [{ type: 2, percent: 60 }],
    price: 0,
    aporte: 25000,
    score: 5,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "En situación queda reflejando un país como el nuestro, en donde el hambre y la pobreza son cada día mayores, producto de la corrupción y manipulación desde el poder, el cual es representado en la obra por “la vieja”.",
        img: [
          "https://drive.google.com/uc?export=download&id=1b0jdTUqC6NCy5O-hE-ySiu0Z-nuTx_Ym",
          "https://drive.google.com/uc?export=download&id=1Mi2HtOUgnGPDIg7woaDenUDXwF4r0B7C",
          "https://drive.google.com/uc?export=download&id=1SkCtjb4xG9foHJ8Z6gW9AxUR3zBMaLA2",
        ],
        duration: 40,
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
    cod: 19,
    name: "La Guandoca",
    img: "https://drive.google.com/uc?export=download&id=1Krzf_23VwW3l_1MeuvZTtah42qyrWZc4",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1gxk4pVe1auxPgqdFY5PPyBguneZ99KM3",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1ezKaf85tPPhgVyFf4yn_b1Qo0tpq4cid",
    gender: 7,
    description: "es un libro de relatos que escribió Gabriela Samper. ",
    dates: [
      {
        date: "23/04/2023",
        aforo: 40,
        sold: [],
        theater: 0,
        sala: 0,
      },
      {
        date: "3/05/2023",
        aforo: 40,
        sold: [],
        theater: 0,
        sala: 0,
      },
    ],
    desc: [{ type: 2, percent: 60 }],
    price: 0,
    aporte: 20000,
    score: 3,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Por encima de los personajes, a manera de “gran hermano”, se encuentra una figura fantasmagórica desde donde se dan todas las ordenes a través de un altoparlante.",
        img: [
          "https://drive.google.com/uc?export=download&id=1BD5H5wBUyXdmQicS1r67UP9vlfxG4b6N",
          "https://drive.google.com/uc?export=download&id=1_CsMGn5R0_AU2HOABSy6FnD18VmYwv-F",
          "https://drive.google.com/uc?export=download&id=1aTizyOjAstBCYwAhXNNDXQaBo8qr80iO",
        ],
        duration: 40,
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
    cod: 20,
    name: "Macbeth",
    img: "https://drive.google.com/uc?export=download&id=1diIxMZ3m_NYtNy6C1SAeCB2jBpHBJZCj",
    imgDetail:
      "https://drive.google.com/uc?export=download&id=1GcilZqnj0wAPVShraQHbzdyoA6xUD94c",
    imgPost:
      "https://drive.google.com/uc?export=download&id=1LClGf3otu3Ylp6Tdnblpu1UwvHyf_tmU",
    gender: 7,
    description:
      "Una historia original del mundo bárbaro medieval, pero que se conecta directamente con la barbarie del mundo actual y la de nuestro país en particular.",
    dates: [
      {
        date: "27/04/2023",
        aforo: 30,
        sold: [],
        theater: 0,
        sala: 0,
      },
      {
        date: "7/05/2023",
        aforo: 20,
        sold: [],
        theater: 0,
        sala: 0,
      },
    ],
    desc: [{ type: 2, percent: 60 }],
    price: 65000,
    aporte: 0,
    score: 5,
    data: [
      {
        id: 0,
        name: "Datos",
        description:
          "Macbeth, un general del ejército escocés, es abordado por tres brujas, quienes le pronostican que muy pronto será barón de Cawdor y rey de Escocia.",
        img: [
          "https://drive.google.com/uc?export=download&id=1OJhi4hPLMA9vAFgmiUHuDlJt-UccWbPE",
          "https://drive.google.com/uc?export=download&id=1CJoCaRoME1njOEefhiA2TGyIVP3CMr7M",
          "https://drive.google.com/uc?export=download&id=1Obxllqk6Mi1W_HnBN9ZG1rtKiDp2-4TU",
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
