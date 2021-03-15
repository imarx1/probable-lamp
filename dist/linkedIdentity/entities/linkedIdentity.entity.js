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
exports.LinkedIdentity = void 0;
const typeorm_1 = require("typeorm");
const biodata_entity_1 = require("../../biodata/entities/biodata.entity");
let LinkedIdentity = class LinkedIdentity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LinkedIdentity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], LinkedIdentity.prototype, "nin", void 0);
__decorate([
    typeorm_1.Column('simple-array'),
    __metadata("design:type", Array)
], LinkedIdentity.prototype, "mobileNumbers", void 0);
__decorate([
    typeorm_1.OneToOne(type => biodata_entity_1.Biodata, biodata => biodata.linkedIdentity),
    typeorm_1.JoinColumn(),
    __metadata("design:type", biodata_entity_1.Biodata)
], LinkedIdentity.prototype, "biodata", void 0);
LinkedIdentity = __decorate([
    typeorm_1.Entity()
], LinkedIdentity);
exports.LinkedIdentity = LinkedIdentity;
//# sourceMappingURL=linkedIdentity.entity.js.map