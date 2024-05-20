import { CheckServiceMultiple } from '../domain/use-cases/checks/check-service-multiple';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { MongoLogDatasource } from '../infrastructure/datasources/mongo-log.datasource';
import { PostgresLogDatasource } from '../infrastructure/datasources/postgres-log.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';


const fslogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
);

const mongologRepository = new LogRepositoryImpl(
  new MongoLogDatasource(),
);

const postgreslogRepository = new LogRepositoryImpl(
  new PostgresLogDatasource(),
);

const emailService = new EmailService();


export class Server {

  public static async start() {

    console.log( 'Server started.....' );

    //todo: Mandar email
    // new SendEmailLogs(
    //   emailService, 
    //   fileSystemLogRepository,
    // ).execute(
    //   ['rafaelg21@gmail.com','rafaelg21.doc@gmail.com']
    // )
    // emailService.sendEmailWithFileSystemLogs(
    //   ['rafaelg21@gmail.com','rafaelg21.doc@gmail.com']
    // );
    
    // const logs = await logRepository.getLogs(LogSeverityLevel.low);
    // console.log(logs);
    
    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckServiceMultiple(
    //       [fslogRepository, postgreslogRepository, mongologRepository],
    //       () => console.log( `${ url } is ok` ),
    //       ( error ) => console.log( error ),
    //     ).execute( url );
        
    //   }
    // );


  }


}


