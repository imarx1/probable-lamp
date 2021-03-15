"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedIdentityModule = void 0;
const common_1 = require("@nestjs/common");
const linkedIdentity_service_1 = require("./linkedIdentity.service");
const linkedIdentity_controller_1 = require("./linkedIdentity.controller");
const linkedIdentity_entity_1 = require("./entities/linkedIdentity.entity");
const typeorm_1 = require("@nestjs/typeorm");
const biodata_entity_1 = require("../biodata/entities/biodata.entity");
let LinkedIdentityModule = class LinkedIdentityModule {
};
LinkedIdentityModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([linkedIdentity_entity_1.LinkedIdentity, biodata_entity_1.Biodata])],
        controllers: [linkedIdentity_controller_1.LinkedIdentityController],
        providers: [linkedIdentity_service_1.LinkedIdentityService]
    })
], LinkedIdentityModule);
exports.LinkedIdentityModule = LinkedIdentityModule;
//# sourceMappingURL=linkedIdentity.module.js.map