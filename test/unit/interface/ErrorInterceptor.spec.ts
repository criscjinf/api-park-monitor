import { HttpException, HttpStatus} from '@nestjs/common';
import { Observable } from 'rxjs';
import { BusinessError } from 'src/domain';
import { ErrorInterceptor } from 'src/Interface';

describe('interface/ErrorInterceptor', () => {
    let stubs;
    let errorInterceptor;

    beforeEach(() => {

        stubs = {
            context: {},
            next: {
                handle: () => new Observable()
            }
        };

        errorInterceptor = new ErrorInterceptor();

    });

    test('Should return Unprocessable Entity error', (done) => {
        errorInterceptor = new ErrorInterceptor();

        stubs.next.handle = () => new Observable(() => {
            throw new BusinessError('teste');
        });

        errorInterceptor.intercept(stubs.context, stubs.next);
        stubs.next.handle().subscribe({
            error: (error) => {
                expect(error).toBeInstanceOf(BusinessError);
                done();
            }
        });
    });

    test('Should process Business error', () => {
        const error = new BusinessError('error');
        try{
            ErrorInterceptor.processError(error);
        }
        catch(e) {
            expect(e).toBeInstanceOf(HttpException);
            expect(e.status).toEqual(HttpStatus.UNPROCESSABLE_ENTITY);
            expect(e.message).toEqual('Unprocessable Entity');
        }
    });

    test('Should process not Business error', () => {
        const error = new Error('error');
        try{
            ErrorInterceptor.processError(error);
        }
        catch(e) {
            expect(e).toBeInstanceOf(HttpException);
            expect(e.status).toEqual(HttpStatus.INTERNAL_SERVER_ERROR);
            expect(e.message).toEqual('Internal Server Error');
        }
    });
});
