import { DataSource } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { config } from 'dotenv';

// Load environment variables
config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User],
  synchronize: false,
});

async function deleteAllUsers() {
  try {
    // Initialize the data source
    await AppDataSource.initialize();
    console.log('Connected to database');

    // Get the user repository
    const userRepository = AppDataSource.getRepository(User);

    // Delete all users
    const result = await userRepository.delete({});
    console.log(`Successfully deleted ${result.affected} users`);

    // Close the connection
    await AppDataSource.destroy();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// Run the script
deleteAllUsers(); 