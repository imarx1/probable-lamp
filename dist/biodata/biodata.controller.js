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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiodataController = void 0;
const common_1 = require("@nestjs/common");
const biodata_service_1 = require("./biodata.service");
const create_biodata_dto_1 = require("./dto/create-biodata.dto");
const update_biodata_dto_1 = require("./dto/update-biodata.dto");
let BiodataController = class BiodataController {
    constructor(biodataService) {
        this.biodataService = biodataService;
    }
    create(createBiodataDto) {
        return this.biodataService.create(createBiodataDto);
    }
    findAll() {
        return this.biodataService.findAll();
    }
    findOne(id) {
        return this.biodataService.findOne(+id);
    }
    update(id, updateBiodataDto) {
        return this.biodataService.update(+id, updateBiodataDto);
    }
    remove(id) {
        return this.biodataService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_biodata_dto_1.CreateBiodataDto]),
    __metadata("design:returntype", void 0)
], BiodataController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BiodataController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiodataController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_biodata_dto_1.UpdateBiodataDto]),
    __metadata("design:returntype", void 0)
], BiodataController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiodataController.prototype, "remove", null);
BiodataController = __decorate([
    common_1.Controller('biodata'),
    __metadata("design:paramtypes", [biodata_service_1.BiodataService])
], BiodataController);
exports.BiodataController = BiodataController;
//# sourceMappingURL=biodata.controller.js.map