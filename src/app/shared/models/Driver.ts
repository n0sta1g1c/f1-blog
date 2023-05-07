export interface Driver {
    race_number: string;
    dateofbirth: string;
    name: string;
    team: string;
    country: string;
    stats: {
        championships: string;
        highest_grid_position: string;
        highest_race_finish: string;
    }
}