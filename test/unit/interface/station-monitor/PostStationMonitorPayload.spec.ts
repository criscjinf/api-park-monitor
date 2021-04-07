import { PostStationMonitorPayload } from "src/Interface"

describe('interface/PostStationMonitorPayload', () => {
    test('Should instance a PostStationMonitorPayload successfully', () => {
        const payload = new PostStationMonitorPayload();

        expect(payload).toBeInstanceOf(PostStationMonitorPayload);
    })
})