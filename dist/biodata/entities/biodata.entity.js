"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biodata = void 0;
const typeorm_1 = require("typeorm");
const linkedIdentity_entity_1 = require("../../linkedIdentity/entities/linkedIdentity.entity");
let Biodata = class Biodata {
};
__decorate([
    typeorm_1.Index(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Biodata.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Biodata.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Biodata.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], Biodata.prototype, "dateOfBirth", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Biodata.prototype, "nationality", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Biodata.prototype, "countryOfBirth", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Biodata.prototype, "stateOfBirth", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Biodata.prototype, "townOfBirth", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Biodata.prototype, "residenceAddress", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Biodata.prototype, "profession", void 0);
__decorate([
    typeorm_1.OneToOne(type => linkedIdentity_entity_1.LinkedIdentity, linkedIdentity => linkedIdentity.biodata),
    __metadata("design:type", linkedIdentity_entity_1.LinkedIdentity)
], Biodata.prototype, "linkedIdentity", void 0);
Biodata = __decorate([
    typeorm_1.Entity()
], Biodata);
exports.Biodata = Biodata;
//# sourceMappingURL=biodata.entity.js.map