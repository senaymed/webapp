"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_config_1 = require("../../typeorm.config");
const user_entity_1 = require("../user/entities/user.entity");
async function clearDatabase() {
    try {
        await typeorm_config_1.default.initialize();
        console.log('Connected to database');
        const userRepository = typeorm_config_1.default.getRepository(user_entity_1.User);
        await userRepository.clear();
        console.log('All users have been deleted');
        await typeorm_config_1.default.destroy();
        console.log('Database connection closed');
    }
    catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}
clearDatabase();
//# sourceMappingURL=clear-db.js.map