import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class ClientForeignKey1604423566005 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey('clients',
      new TableForeignKey({
        name: 'providerClient',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'providers',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('clients','providerClient');
    }
}
