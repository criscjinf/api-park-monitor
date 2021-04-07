import { StationMonitor } from "src/domain";
import { StationMonitorMapper, StationMonitorModel } from "src/infrastructure"
import factory from "test/factory"

describe('infrastructure/StationMonitorMapper', () => {
    let stationMonitorEntity;
    beforeEach(() => {
        stationMonitorEntity = factory.newStationMonitor();
        StationMonitorModel.create = jest.fn(() => { return stationMonitorEntity });
    })

    test('Should create an instance of StationMonitorModel ', () => {
        const mapper = new StationMonitorMapper()
        const model = mapper.fromStationMonitorEntity(stationMonitorEntity)

        expect(model).toBeInstanceOf(StationMonitor);
    })

    test('Should create an instance of StationMonitor ', () => {
        const mapper = new StationMonitorMapper()
        const model = mapper.fromStationMonitorModel(stationMonitorEntity)

        expect(model).toBeInstanceOf(StationMonitor);
    })

})