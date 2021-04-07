import { ParkMonitor } from "src/domain";
import { ParkMonitorMapper, ParkMonitorModel } from "src/infrastructure"
import factory from "test/factory"

describe('infrastructure/ParkMonitorMapper', () => {
    let parkMonitorEntity;
    beforeEach(() => {
        parkMonitorEntity = factory.newParkMonitor();
        ParkMonitorModel.create = jest.fn(() => { return parkMonitorEntity });
    })

    test('Should create an instance of ParkMonitorModel ', () => {
        const mapper = new ParkMonitorMapper()
        const model = mapper.fromParkMonitorEntity(parkMonitorEntity)

        expect(model).toBeInstanceOf(ParkMonitor);
    })

    test('Should create an instance of ParkMonitor ', () => {
        const mapper = new ParkMonitorMapper()
        const model = mapper.fromParkMonitorModel(parkMonitorEntity)

        expect(model).toBeInstanceOf(ParkMonitor);
    })

})