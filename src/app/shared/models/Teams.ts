export interface Teams {
    id: string;
    name: string;
    base: string;
    stats: {
        championships: string;
        total_points: string;
    }
    drivers: {
        driver_number1: string;
        driver_number2: string;
    }
}