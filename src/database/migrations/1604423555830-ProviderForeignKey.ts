import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class ProviderForeignKey1604423555830 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createForeignKey('providers',
        new TableForeignKey({
          name: 'companyProvider',
          columnNames: ['company_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'companies',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('providers','companyProvider');
    }
}
