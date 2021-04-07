import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, ObservableInput } from "rxjs";
import { catchError } from "rxjs/operators"
import { BusinessError } from "src/domain";

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
    intercept (context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(catchError(ErrorInterceptor.processError))
    }

    static processError(error): ObservableInput<any> {
        if (error instanceof BusinessError) {
            throw new HttpException({
                message: 'Unprocessable Entity',
                details: [error.message]
            }, HttpStatus.UNPROCESSABLE_ENTITY);
        } else {
            throw new HttpException({
                message: 'Internal Server Error',
                details: [error.message]
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}