import { HealthCheckController } from "src/Interface"

describe('interface/HealthCheckController', () => {
    test('Must answer if the API is OK', async () => {
        const healthCheckController = new HealthCheckController();
        let response = await healthCheckController.getHealthCheck();
        expect(response).toContain('Health ok! Version')
    })
})