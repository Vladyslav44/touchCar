import gas from "../../assets/engine/gas.png";
import sedan from "../../assets/cars/sedan.png";
import minivan from "../../assets/cars/minivan.png";
import petrol from "../../assets/engine/petrol.png";
import diesel from "../../assets/engine/diesel.png";
import hybrid from "../../assets/engine/hybrid.png";
import hatchback from "../../assets/cars/hatchback.png";
import universal from "../../assets/cars/universal.png";
import crossover from "../../assets/cars/crossover.png";
import offRaider from "../../assets/cars/offRaider.png";
import electric from "../../assets/engine/electric.png";

const TYPE_OF_CAR_ITEMS = [
    {
        value: 'sedan',
        label: 'СЕДАН',
        // icon: sedan
    },
    {
        value: 'hatchback',
        label: 'ХЕТЧБЕК',
        // icon: hatchback
    },
    {
        value: 'universal',
        label: 'УНІВЕРСАЛ',
        // icon: universal
    },
    {
        value: 'crossover',
        label: 'КРОСОВЕР',
        // icon: crossover
    },
    {
        value: 'minivan',
        label: 'МІНІВЕН',
        // icon: minivan
    },
    {
        value: 'offRaider',
        label: 'ПОЗАШЛЯХОВИК',
        // icon: offRaider
    },
    {
        value: 'undecided',
        label: 'НЕ ВАЖЛИВО/НЕ ВИЗНАЧИВСЯ'
    }
];

const ENGINE_TYPE_ITEMS = [
    {
        value: 'petrol',
        label: 'БЕНЗИН',
        // icon: petrol
    },
    {
        value: 'diesel',
        label: 'ДИЗЕЛЬ',
        // icon: diesel
    },
    {
        value: 'electric',
        label: 'ЕЛЕКТРО',
        // icon: electric
    },
    {
        value: 'hybrid',
        label: 'ГІБРИД',
        // icon: hybrid
    },
    {
        value: 'gas',
        label: 'ГАЗ',
        // icon: gas
    },
    {
        value: 'undecided',
        label: 'НЕ ВАЖЛИВО/НЕ ВИЗНАЧИВСЯ'
    }
];

const CAR_BUDGET_ITEMS = [
    {
        value: '<10000',
        label: 'ДО 10000$'
    },
    {
        value: '15000',
        label: '10000 - 15000$'
    },
    {
        value: '20000',
        label: '15000 - 20000$'
    },
    {
        value: '25000',
        label: '20000 - 25000$'
    },
    {
        value: '25000>',
        label: '25000$ +'
    }
];

const PRESENT_TYPE_ITEMS = [
    {
        value: 'interior-cleaning',
        label: 'ХІМЧІСТКА САЛОНУ'
    },
    {
        value: 'polishing',
        label: 'КОСМЕТИЧНЕ ПАЛІРУВАННЯ'
    },
    {
        value: 'full-tank',
        label: 'ПОВНИЙ БАК БЕНЗИНУ'
    },
    {
        value: 'tinting',
        label: 'ТОНУВАННЯ АВТО'
    },
    {
        value: 'fluids-filters',
        label: 'ЗАМІНА РІДИН ТА ФІЛЬТРІВ'
    }
];


const TITLES_MAP = {
    1: 'ОБЕРІТЬ ТИП КУЗОВА',
    2: 'ОБЕРІТЬ ВИД ПАЛИВА',
    3: 'ВКАЖІТЬ БЮДЖЕТ НА АВТО',
    4: 'ОБЕРІТЬ ПОДАРУНОК'
}

const OPTIONS_MAP = {
    1: TYPE_OF_CAR_ITEMS,
    2: ENGINE_TYPE_ITEMS,
    3: CAR_BUDGET_ITEMS,
    4: PRESENT_TYPE_ITEMS
}

const THEME_MAP = {
    1: 'primary',
    2: 'primary',
    3: 'secondary',
    4: 'secondary'
};

export {
    THEME_MAP,
    TITLES_MAP,
    OPTIONS_MAP
}
