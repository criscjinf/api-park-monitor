import { mock } from 'jest-mock-extended';
import { IStationMonitorRepository, StationMonitor } from 'src/domain';
import factory from 'test/factory';

describe('domain/IStationMonitorRepository', () => {
    let mockIStationMonitorRepository;

    beforeEach(() => {
        mockIStationMonitorRepository = mock<IStationMonitorRepository>();
    })

    test('should have appropriated fields and types of IParkMonitorRepository', () => {
        const stationMonitor = factory.newStationMonitor()
        mockIStationMonitorRepository.insert(stationMonitor);
        mockIStationMonitorRepository.findOneByStationIdAndDateAndTypePassage(1, '2020-09-01', 'INPUT');

        expect(mockIStationMonitorRepository.insert).toHaveBeenCalledTimes(1);
        expect(mockIStationMonitorRepository.findOneByStationIdAndDateAndTypePassage).toHaveBeenCalledTimes(1);
    })
})