"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// const sequelize = new Sequelize("sql2392387", "sql2392387", "Oluwanifesi123", {
//   host: "localhost",
//   dialect: "mysql",
//   define: {
//     timestamps: false,
//   },
// });
const sequelize = new sequelize_1.Sequelize("sql2392387", "sql2392387", "bN3%jI7*", {
    host: "sql2.freemysqlhosting.net",
    port: 3306,
    dialect: "mysql",
    define: {
        timestamps: false,
    },
});
class PostMessage extends sequelize_1.Model {
    static checkIsValidAndDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.findByPk(id);
                if (res) {
                    yield res.destroy();
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    static checkIsvalidAndUpdate(key, values) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.findByPk(key);
                if (res) {
                    if (values) {
                        const result = yield res.update(values);
                        return result;
                    }
                    return res;
                }
            }
            catch (e) {
                throw e;
            }
        });
    }
    static checkIsValidAndUpdateLike(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.findByPk(id);
                if (res) {
                    const result = yield res.update({ likeCount: res.likeCount + 1 });
                    return result;
                }
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = PostMessage;
(() => __awaiter(void 0, void 0, void 0, function* () {
    var q = sequelize.getQueryInterface();
    q.createTable("postmessages", {
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: new sequelize_1.DataTypes.STRING(5000),
            allowNull: false,
        },
        creator: {
            type: new sequelize_1.DataTypes.STRING(1000),
            allowNull: false,
        },
        message: {
            type: new sequelize_1.DataTypes.TEXT("long"),
            allowNull: false,
        },
        tags: {
            type: new sequelize_1.DataTypes.STRING(5000),
            allowNull: false,
        },
        selectedFile: {
            type: new sequelize_1.DataTypes.TEXT("long"),
            allowNull: false,
        },
        likeCount: {
            type: new sequelize_1.DataTypes.INTEGER(),
            allowNull: false,
            defaultValue: 0,
        },
        createdDate: {
            type: new sequelize_1.DataTypes.DATE(),
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
    });
}))();
PostMessage.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: new sequelize_1.DataTypes.STRING(5000),
        allowNull: false,
    },
    creator: {
        type: new sequelize_1.DataTypes.STRING(1000),
        allowNull: false,
    },
    message: {
        type: new sequelize_1.DataTypes.TEXT("long"),
        allowNull: false,
    },
    tags: {
        type: new sequelize_1.DataTypes.STRING(5000),
        allowNull: false,
    },
    selectedFile: {
        type: new sequelize_1.DataTypes.TEXT("long"),
        allowNull: false,
    },
    likeCount: {
        type: new sequelize_1.DataTypes.INTEGER(),
        allowNull: false,
        defaultValue: 0,
    },
    createdDate: {
        type: new sequelize_1.DataTypes.DATE(),
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, { sequelize, modelName: "postmessages" });
