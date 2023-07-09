<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class ProductsMigration extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * https://book.cakephp.org/phinx/0/en/migrations.html#the-change-method
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function up(): void
    {
        $table = $this->table('products');

        $table->addColumn('name', 'string')
            //   ->addColumn('tax', 'float', ['scale' => 2, 'precision' => 4])
              ->addColumn('price', 'decimal', ['scale' => 3, 'precision' => 9])
              ->addColumn('quantity', 'integer')
              ->addColumn('created', 'datetime')
              ->create();

        $sql = "ALTER TABLE products ADD COLUMN tax NUMERIC(10,2)";

        $this->query($sql);
    }

    public function down()
    {
        $this->table('products')->drop()->save();
    }
}
