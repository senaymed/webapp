import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmailService } from './email.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        // Debug: Log all environment variables
        console.log('Environment variables:', {
          SMTP_HOST: configService.get('SMTP_HOST'),
          SMTP_PORT: configService.get('SMTP_PORT'),
          SMTP_USER: configService.get('SMTP_USER'),
          SMTP_PASSWORD: configService.get('SMTP_PASSWORD') ? '****' : undefined,
          NODE_ENV: process.env.NODE_ENV,
          PWD: process.cwd(),
        });

        const smtpHost = configService.get('SMTP_HOST');
        const smtpPort = configService.get('SMTP_PORT');
        const smtpUser = configService.get('SMTP_USER');
        const smtpPass = configService.get('SMTP_PASSWORD');

        // Check each configuration value and provide specific error messages
        const missingConfigs = [];
        if (!smtpHost) missingConfigs.push('SMTP_HOST');
        if (!smtpPort) missingConfigs.push('SMTP_PORT');
        if (!smtpUser) missingConfigs.push('SMTP_USER');
        if (!smtpPass) missingConfigs.push('SMTP_PASSWORD');

        if (missingConfigs.length > 0) {
          throw new Error(
            `Missing required SMTP configuration: ${missingConfigs.join(', ')}. ` +
            'Please check your .env file and ensure these values are set correctly.'
          );
        }

        const config = {
          transport: {
            host: smtpHost,
            port: parseInt(smtpPort, 10),
            secure: true, // Use SSL/TLS
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
            debug: true,
            logger: true,
          },
          defaults: {
            from: `"SenayMed" <${smtpUser}>`,
          },
        };
        
        console.log('Email configuration loaded successfully:', {
          host: config.transport.host,
          port: config.transport.port,
          user: config.transport.auth.user,
        });
        
        return config;
      },
      inject: [ConfigService],
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {} 