import AppDataSource from '../../typeorm.config';
import { User } from '../user/entities/user.entity';

async function clearDatabase() {
  try {
    await AppDataSource.initialize();
    console.log('Connected to database');

    const userRepository = AppDataSource.getRepository(User);
    await userRepository.clear();
    console.log('All users have been deleted');

    await AppDataSource.destroy();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

clearDatabase(); 