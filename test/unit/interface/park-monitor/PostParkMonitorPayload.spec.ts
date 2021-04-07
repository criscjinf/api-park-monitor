import { PostParkMonitorPayload } from "src/Interface"

describe('interface/PostParkMonitorPayload', () => {
    test('Should instance a PostParkMonitorPayload successfully', () => {
        const payload = new PostParkMonitorPayload();

        expect(payload).toBeInstanceOf(PostParkMonitorPayload);
    })
})