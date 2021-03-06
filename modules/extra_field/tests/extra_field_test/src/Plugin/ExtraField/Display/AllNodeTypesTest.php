<?php

namespace Drupal\extra_field_test\Plugin\ExtraField\Display;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\extra_field\Plugin\ExtraFieldDisplayBase;

/**
 * Extra field Display for all node types.
 *
 * @ExtraFieldDisplay(
 *   id = "all_node_types_test",
 *   label = @Translation("Extra field for all node types"),
 *   description = @Translation("An extra field to display static text."),
 *   bundles = {
 *     "node.*",
 *   },
 *   weight = 7,
 *   visible = true
 * )
 */
class AllNodeTypesTest extends ExtraFieldDisplayBase {

  /**
   * {@inheritdoc}
   */
  public function view(ContentEntityInterface $entity) {

    return ['#markup' => 'Output from AllNodeTypesTest'];
  }

}
