/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AssetService } from "../asset.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AssetCreateInput } from "./AssetCreateInput";
import { Asset } from "./Asset";
import { AssetFindManyArgs } from "./AssetFindManyArgs";
import { AssetWhereUniqueInput } from "./AssetWhereUniqueInput";
import { AssetUpdateInput } from "./AssetUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AssetControllerBase {
  constructor(
    protected readonly service: AssetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Asset })
  @nestAccessControl.UseRoles({
    resource: "Asset",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAsset(@common.Body() data: AssetCreateInput): Promise<Asset> {
    return await this.service.createAsset({
      data: data,
      select: {
        assetType: true,
        assignedTo: true,
        condition: true,
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Asset] })
  @ApiNestedQuery(AssetFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Asset",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async assets(@common.Req() request: Request): Promise<Asset[]> {
    const args = plainToClass(AssetFindManyArgs, request.query);
    return this.service.assets({
      ...args,
      select: {
        assetType: true,
        assignedTo: true,
        condition: true,
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Asset",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async asset(
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<Asset | null> {
    const result = await this.service.asset({
      where: params,
      select: {
        assetType: true,
        assignedTo: true,
        condition: true,
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Asset",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAsset(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() data: AssetUpdateInput
  ): Promise<Asset | null> {
    try {
      return await this.service.updateAsset({
        where: params,
        data: data,
        select: {
          assetType: true,
          assignedTo: true,
          condition: true,
          createdAt: true,
          id: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Asset",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAsset(
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<Asset | null> {
    try {
      return await this.service.deleteAsset({
        where: params,
        select: {
          assetType: true,
          assignedTo: true,
          condition: true,
          createdAt: true,
          id: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
