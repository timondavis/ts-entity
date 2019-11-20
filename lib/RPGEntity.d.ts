export declare class RPGEntity {
    private stats;
    private name;
    private description;
    private eventCallbacks;
    getName(): string;
    getDescription(): string;
    getStats(): {
        [key: string]: number;
    };
    getStat(name: string): number;
    setName(name: string): RPGEntity;
    setDescription(description: string): RPGEntity;
    setStat(key: string, value: number): RPGEntity;
    updateStat(key: string, value: number): RPGEntity;
    adjustStat(key: string, value: number): RPGEntity;
    setCallback(event: string, callback: {
        (event: string, entities?: RPGEntity[]): void;
    }): RPGEntity;
    removeCallback(event: string): void;
    executeCallback(event: string, entities: RPGEntity[]): RPGEntity;
}
