console.log('🚀 Загрузка приложения...');

// База данных тегов (остается прежней)
const tagsData = {
    structure: [
        { tag: "[Intro]", description: "Вступление к песне" },
        { tag: "[Verse]", description: "Куплет песни" },
        { tag: "[Verse 1]", description: "Первый куплет" },
        { tag: "[Verse 2]", description: "Второй куплет" },
        { tag: "[Chorus]", description: "Припев песни" },
        { tag: "[Pre-Chorus]", description: "Подготовка к припеву" },
        { tag: "[Post-Chorus]", description: "После припева" },
        { tag: "[Bridge]", description: "Переходная часть" },
        { tag: "[Outro]", description: "Завершение песни" },
        { tag: "[Solo]", description: "Инструментальное соло" },
        { tag: "[Breakdown]", description: "Брейкдаун" },
        { tag: "[Drop]", description: "Кульминация (EDM)" },
        { tag: "[Build-up]", description: "Нарастание" },
        { tag: "[Fade In]", description: "Плавное появление" },
        { tag: "[Fade Out]", description: "Плавное затухание" }
    ],
    vocal: [
        { tag: "[Vocal: Male]", description: "Мужской вокал" },
        { tag: "[Vocal: Female]", description: "Женский вокал" },
        { tag: "[Whispered]", description: "Шепот" },
        { tag: "[Growl]", description: "Рычащий вокал" },
        { tag: "[Falsetto]", description: "Фальцет" },
        { tag: "[Belting]", description: "Мощное пение" },
        { tag: "[Harmony]", description: "Гармонии" },
        { tag: "[Harmony 2x]", description: "Двойная гармония" },
        { tag: "[Harmony 3x]", description: "Тройная гармония" },
        { tag: "[Choir]", description: "Хор" },
        { tag: "[Autotune]", description: "Автотюн" },
        { tag: "[Vocoder]", description: "Вокодер" },
        { tag: "[Echo]", description: "Эхо на вокале" },
        { tag: "[Vibrato]", description: "Вибрато" },
        { tag: "[Breathy]", description: "Дыхательная подача" },
        { tag: "[Raspy]", description: "Хриплый голос" },
        { tag: "[Smooth]", description: "Гладкий голос" },
        { tag: "[Rap]", description: "Рэп вокал" },
        { tag: "[Spoken]", description: "Разговорный вокал" },
        { tag: "[Humming]", description: "Мычание" }
    ],
    style: [
        { tag: "[Genre: Pop]", description: "Поп музыка" },
        { tag: "[Genre: Rock]", description: "Рок музыка" },
        { tag: "[Genre: Jazz]", description: "Джаз" },
        { tag: "[Genre: Blues]", description: "Блюз" },
        { tag: "[Genre: Country]", description: "Кантри" },
        { tag: "[Genre: Electronic]", description: "Электронная музыка" },
        { tag: "[Genre: Hip-Hop]", description: "Хип-хоп" },
        { tag: "[Genre: R&B]", description: "Ритм-н-блюз" },
        { tag: "[Genre: Folk]", description: "Фолк музыка" },
        { tag: "[Genre: Classical]", description: "Классическая музыка" },
        { tag: "[BPM: 60]", description: "Медленный темп" },
        { tag: "[BPM: 80]", description: "Умеренно медленный" },
        { tag: "[BPM: 100]", description: "Средний темп" },
        { tag: "[BPM: 120]", description: "Стандартный темп" },
        { tag: "[BPM: 140]", description: "Быстрый темп" },
        { tag: "[BPM: 160]", description: "Очень быстрый темп" },
        { tag: "[Key: C]", description: "Тональность До мажор" },
        { tag: "[Key: Cm]", description: "Тональность До минор" },
        { tag: "[Key: G]", description: "Тональность Соль мажор" },
        { tag: "[Key: Am]", description: "Тональность Ля минор" },
        { tag: "[Key: F]", description: "Тональность Фа мажор" },
        { tag: "[Key: Em]", description: "Тональность Ми минор" },
        { tag: "[Energy: 1]", description: "Очень низкая энергия" },
        { tag: "[Energy: 3]", description: "Низкая энергия" },
        { tag: "[Energy: 5]", description: "Средняя энергия" },
        { tag: "[Energy: 7]", description: "Высокая энергия" },
        { tag: "[Energy: 9]", description: "Очень высокая энергия" }
    ],
    instrument: [
        { tag: "[Guitar: Acoustic]", description: "Акустическая гитара" },
        { tag: "[Guitar: Electric]", description: "Электрогитара" },
        { tag: "[Guitar: Classical]", description: "Классическая гитара" },
        { tag: "[Guitar: Distorted]", description: "Гитара с дисторшном" },
        { tag: "[Piano]", description: "Фортепиано" },
        { tag: "[Piano: Grand]", description: "Рояль" },
        { tag: "[Piano: Electric]", description: "Электропиано" },
        { tag: "[Bass: Electric]", description: "Электрическая бас-гитара" },
        { tag: "[Bass: Acoustic]", description: "Акустический бас" },
        { tag: "[Bass: Synth]", description: "Синтезаторный бас" },
        { tag: "[Drums]", description: "Барабаны" },
        { tag: "[Drums: Acoustic]", description: "Акустические барабаны" },
        { tag: "[Drums: Electronic]", description: "Электронные барабаны" },
        { tag: "[Strings]", description: "Струнные инструменты" },
        { tag: "[Violin]", description: "Скрипка" },
        { tag: "[Cello]", description: "Виолончель" },
        { tag: "[Saxophone]", description: "Саксофон" },
        { tag: "[Trumpet]", description: "Труба" },
        { tag: "[Flute]", description: "Флейта" },
        { tag: "[Organ]", description: "Орган" },
        { tag: "[Synth]", description: "Синтезатор" },
        { tag: "[Synth: Pad]", description: "Синтезаторный пад" },
        { tag: "[Synth: Lead]", description: "Лид синтезатор" }
    ],
    production: [
        { tag: "[Reverb: Hall]", description: "Реверберация зала" },
        { tag: "[Reverb: Room]", description: "Комнатная реверберация" },
        { tag: "[Reverb: Plate]", description: "Пластинчатая реверберация" },
        { tag: "[Compression: Light]", description: "Легкая компрессия" },
        { tag: "[Compression: Medium]", description: "Средняя компрессия" },
        { tag: "[Compression: Heavy]", description: "Сильная компрессия" },
        { tag: "[EQ: Bright]", description: "Яркая эквализация" },
        { tag: "[EQ: Warm]", description: "Теплая эквализация" },
        { tag: "[EQ: Dark]", description: "Темная эквализация" },
        { tag: "[Saturation: Tube]", description: "Ламповое насыщение" },
        { tag: "[Saturation: Tape]", description: "Ленточное насыщение" },
        { tag: "[Stereo: Wide]", description: "Широкое стерео" },
        { tag: "[Stereo: Narrow]", description: "Узкое стерео" },
        { tag: "[Loudness: Quiet]", description: "Тихая громкость" },
        { tag: "[Loudness: Loud]", description: "Громкая подача" }
    ],
    effects: [
        { tag: "[Delay]", description: "Задержка" },
        { tag: "[Chorus]", description: "Эффект хоруса" },
        { tag: "[Flanger]", description: "Фленжер" },
        { tag: "[Phaser]", description: "Фейзер" },
        { tag: "[Distortion]", description: "Дисторшн" },
        { tag: "[Overdrive]", description: "Овердрайв" },
        { tag: "[Wah]", description: "Вау-педаль" },
        { tag: "[Tremolo]", description: "Тремоло" },
        { tag: "[Filter: Lowpass]", description: "Фильтр низких частот" },
        { tag: "[Filter: Highpass]", description: "Фильтр высоких частот" },
        { tag: "[Bit Crusher]", description: "Битовое сжатие" },
        { tag: "[Ring Modulator]", description: "Кольцевая модуляция" }
    ]
};

// 15 полных шаблонов с правильным форматированием
const templates = {
    pop: {
        title: "Поп-песня",
        description: "Классическая структура поп-композиции",
        content: `[Intro]
[BPM: 120] [Key: C] [Genre: Pop] [Energy: 6]

[Verse 1]
[Vocal: Female] [Energy: 5] [Piano]
Текст первого куплета с мелодичными строчками
Рассказывающий историю или передающий эмоцию

[Pre-Chorus]
[Energy: 7] [Strings] [Compression: Medium]
Подготовка к припеву с нарастанием
Создает предвкушение главной темы

[Chorus]
[Harmony 3x] [Energy: 8] [Reverb: Hall]
Запоминающийся припев с мощной мелодией
Главная идея песни в ярких красках

[Verse 2]
[Vocal: Female] [Energy: 5] [Piano]
Второй куплет развивает тему дальше
Добавляет новые детали к истории

[Pre-Chorus]
[Energy: 7] [Strings]

[Chorus]
[Harmony 3x] [Energy: 8] [Reverb: Hall]

[Bridge]
[Energy: 6] [Guitar: Acoustic] [Reverb: Room]
Переходная часть с новой мелодией
Момент размышления или поворота

[Chorus]
[Harmony 3x] [Energy: 9] [Strings]

[Outro]
[Piano] [Fade Out] [Energy: 3]`
    },
    
    rock: {
        title: "Рок-композиция",
        description: "Энергичная рок-песня с мощными гитарами",
        content: `[Intro]
[BPM: 140] [Key: Em] [Genre: Rock] [Energy: 8]
[Guitar: Distorted] [Drums: Acoustic] [Bass: Electric]

[Verse 1]
[Vocal: Male] [Guitar: Electric] [Energy: 7]
Мощный рок-куплет с драйвом
Энергичные слова под ритм гитары

[Pre-Chorus]
[Energy: 8] [Guitar: Power Chords] [Compression: Heavy]
Подготовка к взрыву эмоций
Нарастающее напряжение

[Chorus]
[Energy: 9] [Guitar: Distorted] [Harmony 2x]
Рок-припев полный силы и страсти
Кричащий о свободе и бунте

[Verse 2]
[Vocal: Male] [Guitar: Electric] [Energy: 7]
Второй куплет не менее мощный
Продолжает тему борьбы

[Pre-Chorus]
[Energy: 8] [Guitar: Power Chords]

[Chorus]
[Energy: 9] [Guitar: Distorted] [Harmony 2x]

[Solo]
[Guitar: Distorted] [Reverb: Hall] [Energy: 10]
Гитарное соло с техникой и душой

[Chorus]
[Energy: 10] [Guitar: Distorted] [Drums]

[Outro]
[Guitar: Distorted] [Fade Out] [Energy: 8]`
    },
    
    ballad: {
        title: "Баллада",
        description: "Медленная эмоциональная песня",
        content: `[Intro]
[BPM: 70] [Key: F] [Genre: Pop] [Energy: 3]
[Piano: Grand] [Strings] [Reverb: Hall]

[Verse 1]
[Vocal: Female] [Whispered] [Piano] [Energy: 2]
Нежные слова шепотом в ночи
Трогательная история любви

[Chorus]
[Strings] [Energy: 6] [Reverb: Hall] [Belting]
Эмоциональный припев полный чувств
Излияние души через мелодию

[Verse 2]
[Vocal: Female] [Breathy] [Piano] [Energy: 3]
Второй куплет углубляет переживания
Раскрывает сердце еще больше

[Chorus]
[Strings] [Harmony 2x] [Energy: 7] [Reverb: Hall]

[Bridge]
[Piano] [Energy: 2] [Falsetto] [Reverb: Room]
Тихий момент размышлений
Самая интимная часть песни

[Final Chorus]
[Strings] [Harmony 3x] [Energy: 8] [Belting]
Кульминация эмоций

[Outro]
[Piano] [Fade Out] [Energy: 1] [Humming]`
    },
    
    electronic: {
        title: "Электронная танцевальная",
        description: "Энергичный EDM трек",
        content: `[Intro]
[BPM: 128] [Key: Am] [Genre: Electronic] [Energy: 6]
[Synth: Pad] [Bass: Synth] [Reverb: Digital]

[Build-up]
[Energy: 4-8] [Filter: Highpass] [Synth: Lead]
Нарастающее напряжение перед взрывом
Каждый такт добавляет энергии

[Drop]
[Energy: 10] [Bass: Synth] [Compression: Heavy]
[Synth: Lead] [Drums: Electronic]
Танцевальный взрыв звука и ритма
Момент полного погружения в музыку

[Breakdown]
[Energy: 5] [Synth: Pad] [Vocal: Processed]
Спокойная передышка для дыхания
Подготовка к новому взлету

[Build-up 2]
[Energy: 6-9] [Filter: Sweep] [Synth: Arp]

[Drop 2]
[Energy: 10] [Bass: Synth] [Distortion]
[Vocal: Chopped] [Effects: Digital]

[Bridge]
[Energy: 3] [Synth: Ambient] [Reverb: Cathedral]
Эмоциональная пауза в танце

[Final Drop]
[Energy: 10] [Bass: Synth] [Synth: Lead]
[Compression: Heavy]

[Outro]
[Synth: Pad] [Fade Out] [Energy: 2]`
    },
    
    jazz: {
        title: "Джазовый стандарт",
        description: "Классическая джазовая композиция",
        content: `[Intro]
[BPM: 120] [Key: Bb] [Genre: Jazz] [Energy: 5]
[Piano: Electric] [Bass: Acoustic] [Drums]

[Verse 1]
[Vocal: Female] [Smooth] [Piano] [Energy: 4]
[Bass: Walking] [Reverb: Room]
Джазовые слова с импровизацией
Свобода мелодии и ритма

[Chorus]
[Vocal: Belting] [Energy: 6] [Saxophone]
[Piano: Comping] [Brass]
Джазовый припев с соулом

[Piano Solo]
[Piano: Electric] [Energy: 7] [Bass: Walking]
Импровизация на основе темы

[Saxophone Solo]
[Saxophone] [Energy: 7] [Piano]
[Drums: Brushes] [Vibrato]

[Verse 2]
[Vocal: Female] [Smooth] [Energy: 4]

[Final Chorus]
[Vocal: Scat] [Energy: 8] [Brass]
[Piano: Stride]

[Outro]
[Piano] [Bass: Acoustic] [Fade Out]`
    },
    
    country: {
        title: "Кантри-песня",
        description: "Традиционная кантри-композиция",
        content: `[Intro]
[BPM: 100] [Key: G] [Genre: Country] [Energy: 5]
[Guitar: Acoustic] [Harmonica] [Bass: Acoustic]

[Verse 1]
[Vocal: Male] [Guitar: Fingerpicked] [Energy: 4]
История из жизни простого человека
Честные слова под звук гитары

[Chorus]
[Energy: 6] [Guitar: Strummed] [Harmonica]
[Vocal: Harmony] [Drums]
Припев о родине и семье
Ценности простой жизни

[Verse 2]
[Vocal: Male] [Guitar: Acoustic] [Energy: 4]
Продолжение жизненной истории

[Chorus]
[Energy: 6] [Guitar: Strummed] [Harmonica]

[Bridge]
[Guitar: Solo] [Energy: 5] [Reverb: Room]
Инструментальная передышка

[Final Chorus]
[Energy: 7] [Harmony 2x] [Drums]

[Outro]
[Guitar: Acoustic] [Harmonica] [Fade Out]`
    },
    
    blues: {
        title: "Блюзовая композиция",
        description: "Традиционный блюз с душой",
        content: `[Intro]
[BPM: 80] [Key: E] [Genre: Blues] [Energy: 4]
[Guitar: Electric] [Bass: Electric] [Drums]

[Verse 1]
[Vocal: Male] [Raspy] [Guitar: Blues] [Energy: 5]
Блюзовая история о жизни
Пропитанная опытом и болью

[Chorus]
[Energy: 6] [Guitar: Bended] [Harmonica]
[Vocal: Rough] [Bass: Walking]
Блюзовый припев из сердца

[Guitar Solo]
[Guitar: Electric] [Energy: 7] [Reverb: Tube]
Гитарное соло с бендами

[Verse 2]
[Vocal: Male] [Raspy] [Energy: 5]

[Chorus]
[Energy: 6] [Harmonica] [Guitar: Blues]

[Piano Solo]
[Piano] [Energy: 6] [Bass: Walking]

[Final Chorus]
[Energy: 7] [Guitar: Electric] [Vocal: Rough]

[Outro]
[Guitar: Electric] [Fade Out]`
    },
    
    folk: {
        title: "Фолк-песня",
        description: "Акустическая фолк-композиция",
        content: `[Intro]
[BPM: 90] [Key: D] [Genre: Folk] [Energy: 4]
[Guitar: Acoustic] [Harmonica] [Natural]

[Verse 1]
[Vocal: Male] [Guitar: Fingerpicked] [Energy: 3]
История, передаваемая из поколения в поколение
Простые слова с глубоким смыслом

[Chorus]
[Energy: 5] [Guitar: Strummed] [Harmony 2x]
[Mandolin] [Violin]
Народный припев о вечных ценностях

[Verse 2]
[Vocal: Male] [Guitar: Acoustic] [Energy: 3]

[Chorus]
[Energy: 5] [Harmony 2x] [Violin]

[Bridge]
[Harmonica] [Energy: 4] [Guitar: Solo]
Инструментальная интерлюдия

[Final Chorus]
[Energy: 6] [Harmony 3x] [Mandolin]

[Outro]
[Guitar: Acoustic] [Harmonica] [Natural]`
    },
    
    rnb: {
        title: "R&B композиция",
        description: "Соулфул R&B трек",
        content: `[Intro]
[BPM: 95] [Key: F] [Genre: R&B] [Energy: 5]
[Piano: Electric] [Bass: Electric] [Drums]

[Verse 1]
[Vocal: Female] [Smooth] [Piano] [Energy: 4]
[Bass: Slap] [Reverb: Warm]
Соулфул вокал с мелизмами
Эмоциональная подача каждого слова

[Pre-Chorus]
[Energy: 6] [Strings] [Vocal: Belting]

[Chorus]
[Energy: 7] [Harmony 3x] [Bass: Funky]
[Compression: Medium] [Reverb: Hall]
R&B припев полный грува и души

[Verse 2]
[Vocal: Female] [Smooth] [Energy: 4]

[Pre-Chorus]
[Energy: 6] [Strings]

[Chorus]
[Energy: 7] [Harmony 3x] [Bass: Funky]

[Bridge]
[Vocal: Runs] [Energy: 5] [Piano: Solo]
Вокальные украшения и импровизация

[Final Chorus]
[Energy: 8] [Harmony 4x] [Strings]

[Outro]
[Piano] [Vocal: Humming] [Fade Out]`
    },
    
    hiphop: {
        title: "Хип-хоп трек",
        description: "Современный хип-хоп с рэпом",
        content: `[Intro]
[BPM: 85] [Key: Cm] [Genre: Hip-Hop] [Energy: 6]
[Bass: Synth] [Drums: Electronic] [Vocal: Processed]

[Verse 1]
[Rap] [Bass: Deep] [Energy: 7] [Compression: Heavy]
Рэп-куплет с четким флоу
История из города, правда жизни

[Hook]
[Vocal: Autotune] [Energy: 8] [Harmony 2x]
[Synth: Lead] [Reverb: Digital]
Цепляющий хук с мелодией

[Verse 2]
[Rap] [Bass: Synth] [Energy: 7]
Второй куплет развивает тему

[Hook]
[Vocal: Autotune] [Energy: 8] [Harmony 2x]

[Bridge]
[Vocal: Sung] [Energy: 5] [Piano]
Мелодичная вставка для контраста

[Final Hook]
[Energy: 9] [Bass: Synth] [Compression: Heavy]

[Outro]
[Vocal: Processed] [Fade Out] [Energy: 4]`
    },
    
    reggae: {
        title: "Регги-композиция",
        description: "Расслабленный регги-трек",
        content: `[Intro]
[BPM: 75] [Key: A] [Genre: Reggae] [Energy: 4]
[Guitar: Clean] [Bass: Electric] [Drums: One Drop]

[Verse 1]
[Vocal: Male] [Guitar: Skank] [Energy: 4]
[Bass: Root] [Reverb: Dub]
Регги-послание о мире и любви
Расслабленный ритм острова

[Chorus]
[Energy: 6] [Guitar: Upstroke] [Harmony 2x]
[Organ] [Bass: Walking]
Припев о единстве и позитиве

[Verse 2]
[Vocal: Male] [Guitar: Skank] [Energy: 4]

[Chorus]
[Energy: 6] [Harmony 2x] [Organ]

[Bridge]
[Guitar: Solo] [Energy: 5] [Reverb: Dub]
[Bass: Melodic] [Organ]

[Final Chorus]
[Energy: 7] [Harmony 3x] [Guitar: Upstroke]

[Outro]
[Guitar: Clean] [Organ] [Fade Out]`
    },
    
    funk: {
        title: "Фанк-композиция",
        description: "Грувовый фанк с жирным басом",
        content: `[Intro]
[BPM: 110] [Key: E] [Genre: Funk] [Energy: 7]
[Bass: Slap] [Guitar: Funk] [Drums: Tight]

[Verse 1]
[Vocal: Male] [Bass: Syncopated] [Energy: 6]
[Guitar: Wah] [Compression: Funky]
Фанковый куплет с грувом
Ритм заставляет двигаться

[Chorus]
[Energy: 8] [Bass: Slap] [Guitar: Funk]
[Brass: Section] [Vocal: Harmony]
Фанк-припев полный грува

[Verse 2]
[Vocal: Male] [Bass: Slap] [Energy: 6]

[Chorus]
[Energy: 8] [Brass: Section] [Guitar: Wah]

[Bass Solo]
[Bass: Slap] [Energy: 8] [Drums: Breaks]

[Guitar Solo]
[Guitar: Wah] [Energy: 8] [Bass: Groove]

[Final Chorus]
[Energy: 9] [Brass: Big] [Bass: Slap]

[Outro]
[Bass: Slap] [Guitar: Funk] [Fade Out]`
    },
    
    metal: {
        title: "Метал-композиция",
        description: "Тяжелая метал-песня",
        content: `[Intro]
[BPM: 160] [Key: Dm] [Genre: Metal] [Energy: 9]
[Guitar: Distorted] [Bass: Drop] [Drums: Double Bass]

[Verse 1]
[Vocal: Male] [Growl] [Guitar: Palm Muted] [Energy: 8]
[Bass: Aggressive] [Compression: Heavy]
Тяжелый куплет с агрессией
Мощные слова под металлический рифф

[Pre-Chorus]
[Energy: 9] [Guitar: Power Chords] [Drums: Blast]

[Chorus]
[Energy: 10] [Guitar: Distorted] [Vocal: Screams]
[Bass: Drop] [Drums: Double Bass]
Метал-припев полный ярости

[Verse 2]
[Growl] [Guitar: Tremolo] [Energy: 8]

[Pre-Chorus]
[Energy: 9] [Guitar: Power Chords]

[Chorus]
[Energy: 10] [Vocal: Screams] [Guitar: Harmonized]

[Solo]
[Guitar: Shred] [Energy: 10] [Reverb: Dark]
[Bass: Technical] [Drums: Complex]

[Breakdown]
[Guitar: Heavy] [Energy: 10] [Drums: Slow]

[Final Chorus]
[Energy: 10] [Guitar: Distorted] [Vocal: Mixed]

[Outro]
[Guitar: Fade] [Energy: 8]`
    },
    
    ambient: {
        title: "Эмбиент-композиция",
        description: "Атмосферная медитативная музыка",
        content: `[Intro]
[BPM: 60] [Key: C] [Genre: Ambient] [Energy: 2]
[Synth: Pad] [Reverb: Cathedral] [Strings: Ethereal]

[Section 1]
[Energy: 2] [Synth: Evolving] [Reverb: Infinite]
[Filter: Slow] [Compression: None]
Плавающие звуки создают атмосферу
Медитативное путешествие сознания

[Section 2]
[Energy: 3] [Piano: Distant] [Strings: Legato]
[Reverb: Hall] [Synth: Texture]
Добавление мелодических элементов

[Section 3]
[Energy: 4] [Vocal: Ethereal] [Synth: Lead]
[Reverb: Cathedral] [Delay: Long]
Кульминация эмоционального путешествия

[Section 4]
[Energy: 2] [Synth: Pad] [Strings: Fade]
[Reverb: Infinite] [Filter: Closing]
Возвращение к тишине и покою

[Outro]
[Energy: 1] [Synth: Dying] [Reverb: Eternal]
Растворение в пространстве`
    }
};

// Глобальные переменные
let undoStack = [];
let redoStack = [];
let lastCursorPosition = null;

// Главная функция инициализации
function initApp() {
    console.log('🔧 Инициализация...');
    
    try {
        renderAllTags();
        setupEventListeners();
        loadSavedContent();
        updateTagCounter();
        
        console.log('✅ Приложение готово к работе');
    } catch (error) {
        console.error('❌ Ошибка при инициализации:', error);
    }
}

// Рендеринг всех тегов
function renderAllTags(searchFilter = '', categoryFilter = '') {
    console.log('🎨 Рендеринг тегов...');
    
    const container = document.getElementById('tagsContainer');
    if (!container) {
        console.error('❌ Контейнер тегов не найден');
        return;
    }
    
    container.innerHTML = '';
    
    const categoryNames = {
        structure: '🏗️ Структурные',
        vocal: '🎤 Вокальные',
        style: '🎵 Стиль и жанр',
        instrument: '🎸 Инструменты',
        production: '🎛️ Продакшн',
        effects: '✨ Эффекты'
    };
    
    let totalRendered = 0;
    
    Object.keys(tagsData).forEach(category => {
        // Фильтр по категории
        if (categoryFilter && category !== categoryFilter) return;
        
        // Фильтр тегов
        const filteredTags = tagsData[category].filter(tagData => {
            if (!searchFilter) return true;
            return tagData.tag.toLowerCase().includes(searchFilter.toLowerCase()) ||
                   tagData.description.toLowerCase().includes(searchFilter.toLowerCase());
        });
        
        if (filteredTags.length === 0) return;
        
        // Создаем категорию
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'tag-category';
        categoryDiv.innerHTML = `
            <div class="category-header" data-category="${category}">
                <span class="category-icon">▼</span>
                <span>${categoryNames[category]} (${filteredTags.length})</span>
            </div>
            <div class="category-tags" id="tags-${category}">
                ${filteredTags.map(tagData => {
                    totalRendered++;
                    return `
                        <div class="tag-item" 
                             data-tag="${tagData.tag}" 
                             data-category="${category}"
                             draggable="true"
                             title="${tagData.description}">
                            <div class="tag-name">${tagData.tag}</div>
                            <div class="tag-description">${tagData.description}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        
        container.appendChild(categoryDiv);
    });
    
    console.log(`✅ Отрендерено ${totalRendered} тегов`);
    
    // Подключаем обработчики
    setupTagHandlers();
    setupCategoryToggle();
}

// Обработчики для тегов
function setupTagHandlers() {
    const tagItems = document.querySelectorAll('.tag-item');
    
    tagItems.forEach(item => {
        // Клик - вставка тега
        item.addEventListener('click', function() {
            const tag = this.getAttribute('data-tag');
            insertTagIntoEditor(tag);
            
            // Визуальная обратная связь
            this.classList.add('tag-inserted');
            setTimeout(() => this.classList.remove('tag-inserted'), 300);
        });
        
        // Drag start
        item.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.getAttribute('data-tag'));
            e.dataTransfer.effectAllowed = 'copy';
        });
    });
}

// Сворачивание категорий
function setupCategoryToggle() {
    const headers = document.querySelectorAll('.category-header');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const tagsContainer = document.getElementById(`tags-${category}`);
            const icon = this.querySelector('.category-icon');
            
            if (tagsContainer.style.display === 'none') {
                tagsContainer.style.display = 'grid';
                icon.textContent = '▼';
                this.classList.remove('collapsed');
            } else {
                tagsContainer.style.display = 'none';
                icon.textContent = '▶';
                this.classList.add('collapsed');
            }
        });
    });
}

// Вставка тега в редактор
function insertTagIntoEditor(tag) {
    console.log(`📝 Вставка тега: ${tag}`);
    
    const editor = document.getElementById('editor');
    if (!editor) return;
    
    // Сохраняем для отмены
    saveToUndo();
    
    editor.focus();
    
    const selection = window.getSelection();
    let range;
    
    // Используем сохраненную позицию или создаем новую
    if (lastCursorPosition && editor.contains(lastCursorPosition.startContainer)) {
        range = lastCursorPosition;
        selection.removeAllRanges();
        selection.addRange(range);
    } else if (selection.rangeCount > 0) {
        range = selection.getRangeAt(0);
    } else {
        range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false);
    }
    
    // Удаляем выделенное
    range.deleteContents();
    
    // Создаем тег
    const tagSpan = document.createElement('span');
    tagSpan.className = 'text-tag';
    tagSpan.textContent = tag;
    tagSpan.contentEditable = false;
    
    // Вставляем тег и пробел
    range.insertNode(tagSpan);
    
    const space = document.createTextNode(' ');
    range.setStartAfter(tagSpan);
    range.insertNode(space);
    
    // Устанавливаем курсор после пробела
    range.setStartAfter(space);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
    
    // Сохраняем позицию
    lastCursorPosition = range.cloneRange();
    
    saveContent();
    updateTagCounter();
}

// Настройка всех обработчиков событий
function setupEventListeners() {
    console.log('🔗 Настройка обработчиков...');
    
    // Поиск
    const searchInput = document.getElementById('tagSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchText = this.value;
            const category = document.getElementById('categoryFilter').value;
            renderAllTags(searchText, category);
        });
    }
    
    // Фильтр категорий
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            const category = this.value;
            const searchText = document.getElementById('tagSearch').value;
            renderAllTags(searchText, category);
        });
    }
    
    // Редактор
    const editor = document.getElementById('editor');
    if (editor) {
        // Отслеживание курсора
        editor.addEventListener('click', saveCursorPos);
        editor.addEventListener('keyup', saveCursorPos);
        
        // Drag & Drop
        editor.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        });
        
        editor.addEventListener('drop', function(e) {
            e.preventDefault();
            const tag = e.dataTransfer.getData('text/plain');
            if (tag) {
                // Определяем позицию сброса
                const range = document.caretRangeFromPoint(e.clientX, e.clientY);
                if (range) {
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    lastCursorPosition = range;
                }
                insertTagIntoEditor(tag);
            }
        });
        
        // Автосохранение
        editor.addEventListener('input', function() {
            saveContent();
            updateTagCounter();
        });
    }
    
    // Кнопки
    setupButtons();
    
    // Модальные окна
    setupModals();
}

// Сохранение позиции курсора
function saveCursorPos() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        lastCursorPosition = selection.getRangeAt(0).cloneRange();
    }
}

// Настройка кнопок
function setupButtons() {
    const buttons = {
        templateBtn: showTemplates,
        helpBtn: showHelp,
        statisticsBtn: showStatistics,
        exportBtn: exportText,
        clearBtn: clearEditor,
        undoBtn: undo,
        redoBtn: redo
    };
    
    Object.keys(buttons).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', buttons[buttonId]);
            console.log(`✅ Кнопка ${buttonId} подключена`);
        }
    });
}

// Настройка модальных окон
function setupModals() {
    const modals = ['templateModal', 'helpModal', 'statisticsModal'];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        const closeBtn = document.getElementById(modalId.replace('Modal', 'Close'));
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => hideModal(modalId));
        }
        
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    hideModal(modalId);
                }
            });
        }
    });
}

// Показать/скрыть модальное окно
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
    }
}

// Функции кнопок
function showTemplates() {
    console.log('📋 Показ шаблонов');
    
    const container = document.getElementById('templatesContainer');
    if (container) {
        container.innerHTML = Object.keys(templates).map(templateId => {
            const template = templates[templateId];
            return `
                <div class="template-item" data-template="${templateId}">
                    <div class="template-title">${template.title}</div>
                    <div class="template-description">${template.description}</div>
                    <div class="template-preview">${template.content.substring(0, 200)}...</div>
                </div>
            `;
        }).join('');
        
        // Обработчики для шаблонов
        container.querySelectorAll('.template-item').forEach(item => {
            item.addEventListener('click', function() {
                const templateId = this.getAttribute('data-template');
                applyTemplate(templateId);
                hideModal('templateModal');
            });
        });
    }
    
    showModal('templateModal');
}

// ПОЛНОСТЬЮ ИСПРАВЛЕННАЯ функция применения шаблона с правильным форматированием
function applyTemplate(templateId) {
    console.log(`📋 Применение шаблона: ${templateId}`);
    
    const template = templates[templateId];
    if (!template) return;
    
    const editor = document.getElementById('editor');
    if (editor) {
        saveToUndo();
        
        // Разбиваем на строки и обрабатываем каждую
        const lines = template.content.split('\n');
        const fragment = document.createDocumentFragment();
        
        lines.forEach((line, index) => {
            if (line.trim() === '') {
                // Пустая строка - добавляем элемент для пустой строки
                const emptyDiv = document.createElement('div');
                emptyDiv.innerHTML = '<br>';
                fragment.appendChild(emptyDiv);
            } else {
                // Обрабатываем строку с тегами
                const lineDiv = document.createElement('div');
                
                // Заменяем теги на HTML элементы
                const processedLine = line.replace(/\[([^\]]+)\]/g, (match) => {
                    return `<span class="text-tag" contenteditable="false">${match}</span>`;
                });
                
                lineDiv.innerHTML = processedLine;
                fragment.appendChild(lineDiv);
            }
        });
        
        // Очищаем редактор и вставляем новый контент
        editor.innerHTML = '';
        editor.appendChild(fragment);
        
        saveContent();
        updateTagCounter();
        
        console.log('✅ Шаблон применен с правильным форматированием');
    }
}

function showHelp() {
    console.log('❓ Показ справки');
    
    const helpContent = `
        <h3>Как использовать приложение</h3>
        
        <h4>Основные функции:</h4>
        <ul>
            <li><strong>Добавление тегов:</strong> Кликните на тег в правой панели или перетащите его в текст</li>
            <li><strong>Поиск тегов:</strong> Используйте поле поиска для быстрого нахождения нужных тегов</li>
            <li><strong>Фильтрация:</strong> Выберите категорию в выпадающем списке</li>
            <li><strong>Шаблоны:</strong> 15 готовых структур песен для быстрого старта</li>
        </ul>
        
        <h4>Доступные стили шаблонов:</h4>
        <ol>
            <li><strong>Поп-песня:</strong> Классическая структура поп-композиции</li>
            <li><strong>Рок:</strong> Энергичная рок-песня с мощными гитарами</li>
            <li><strong>Баллада:</strong> Медленная эмоциональная песня</li>
            <li><strong>Electronic:</strong> Энергичный EDM трек</li>
            <li><strong>Jazz:</strong> Классическая джазовая композиция</li>
            <li><strong>Country:</strong> Традиционная кантри-композиция</li>
            <li><strong>Blues:</strong> Традиционный блюз с душой</li>
            <li><strong>Folk:</strong> Акустическая фолк-композиция</li>
            <li><strong>R&B:</strong> Соулфул R&B трек</li>
            <li><strong>Hip-Hop:</strong> Современный хип-хоп с рэпом</li>
            <li><strong>Reggae:</strong> Расслабленный регги-трек</li>
            <li><strong>Funk:</strong> Грувовый фанк с жирным басом</li>
            <li><strong>Metal:</strong> Тяжелая метал-песня</li>
            <li><strong>Ambient:</strong> Атмосферная медитативная музыка</li>
        </ol>
        
        <h4>Категории тегов:</h4>
        <ul>
            <li><strong>🏗️ Структурные:</strong> [Intro], [Verse], [Chorus], [Bridge], [Outro]</li>
            <li><strong>🎤 Вокальные:</strong> [Vocal: Male/Female], [Whispered], [Growl], [Harmony]</li>
            <li><strong>🎵 Стиль:</strong> [Genre], [BPM], [Key], [Energy]</li>
            <li><strong>🎸 Инструменты:</strong> [Guitar], [Piano], [Bass], [Drums]</li>
            <li><strong>🎛️ Продакшн:</strong> [Reverb], [Compression], [EQ]</li>
            <li><strong>✨ Эффекты:</strong> [Delay], [Chorus], [Distortion]</li>
        </ul>
        
        <h4>Советы:</h4>
        <ul>
            <li>Начинайте с шаблонов для быстрого старта</li>
            <li>Добавляйте BPM и Key в начало песни</li>
            <li>Используйте не более 3-5 тегов на секцию</li>
            <li>Экспериментируйте с разными стилями</li>
        </ul>
    `;
    
    document.getElementById('helpContent').innerHTML = helpContent;
    showModal('helpModal');
}

function showStatistics() {
    console.log('📈 Показ статистики');
    
    const editor = document.getElementById('editor');
    const tags = editor.querySelectorAll('.text-tag');
    const tagCounts = {};
    
    tags.forEach(tag => {
        const text = tag.textContent;
        tagCounts[text] = (tagCounts[text] || 0) + 1;
    });
    
    const sortedTags = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
    
    let content = '<h3>Статистика использования тегов</h3>';
    
    if (sortedTags.length === 0) {
        content += '<p>Теги не используются. Добавьте теги в текст для просмотра статистики.</p>';
    } else {
        content += '<div style="margin-top: 20px;">';
        content += '<h4>Топ-10 используемых тегов:</h4>';
        content += '<div style="margin-top: 15px;">';
        
        sortedTags.forEach(([tag, count], index) => {
            content += `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 500;">${index + 1}. ${tag}</span>
                    <span style="background: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-size: 0.875rem;">${count}</span>
                </div>
            `;
        });
        
        content += '</div></div>';
    }
    
    document.getElementById('statisticsContent').innerHTML = content;
    showModal('statisticsModal');
}

function exportText() {
    console.log('📤 Экспорт текста');
    
    const editor = document.getElementById('editor');
    const text = editor.innerText || editor.textContent || '';
    
    if (!text.trim()) {
        alert('Нет текста для экспорта');
        return;
    }
    
    // Копируем в буфер обмена
    navigator.clipboard.writeText(text).then(() => {
        alert('Текст скопирован в буфер обмена!');
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Текст скопирован в буфер обмена!');
    });
}

function clearEditor() {
    console.log('🗑️ Очистка редактора');
    
    if (confirm('Вы уверены, что хотите очистить весь текст?')) {
        saveToUndo();
        const editor = document.getElementById('editor');
        if (editor) {
            editor.innerHTML = '';
            saveContent();
            updateTagCounter();
        }
    }
}

// Функции отмены
function saveToUndo() {
    const editor = document.getElementById('editor');
    if (editor) {
        undoStack.push(editor.innerHTML);
        if (undoStack.length > 50) {
            undoStack.shift();
        }
        redoStack = [];
    }
}

function undo() {
    if (undoStack.length > 0) {
        const editor = document.getElementById('editor');
        if (editor) {
            redoStack.push(editor.innerHTML);
            editor.innerHTML = undoStack.pop();
            updateTagCounter();
        }
    }
}

function redo() {
    if (redoStack.length > 0) {
        const editor = document.getElementById('editor');
        if (editor) {
            undoStack.push(editor.innerHTML);
            editor.innerHTML = redoStack.pop();
            updateTagCounter();
        }
    }
}

// Вспомогательные функции
function updateTagCounter() {
    const editor = document.getElementById('editor');
    const counter = document.getElementById('tagCounter');
    
    if (editor && counter) {
        const tags = editor.querySelectorAll('.text-tag');
        counter.textContent = tags.length;
    }
}

function saveContent() {
    const editor = document.getElementById('editor');
    if (editor) {
        localStorage.setItem('suno-song-content', editor.innerHTML);
    }
}

function loadSavedContent() {
    const editor = document.getElementById('editor');
    const saved = localStorage.getItem('suno-song-content');
    
    if (editor && saved) {
        editor.innerHTML = saved;
        console.log('✅ Контент загружен из localStorage');
    }
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM загружен, запуск приложения...');
    initApp();
});

// Дополнительная проверка
window.addEventListener('load', function() {
    setTimeout(() => {
        const tagItems = document.querySelectorAll('.tag-item');
        if (tagItems.length === 0) {
            console.log('🔄 Повторная инициализация...');
            initApp();
        }
    }, 500);
});

console.log('✅ Скрипт загружен полностью');
