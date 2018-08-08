<template>
  <div>
        <div class="row">
            <div class="col-md-12">
                <div class="tabbable-line">
                    <ul class="nav nav-tabs">
                        <li class="active">
                            <a href="#item-groups" data-toggle="tab" aria-expanded="true">Item Groups</a>
                        </li>
                        <li class="">
                            <a href="#items" data-toggle="tab" aria-expanded="false">Items</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="item-groups">
                        </div>
                        <div class="tab-pane" id="items">
                            <items-ui></items-ui>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import ItemsUi from './ui/items/ItemsUI.vue';
export default {
  name: 'Items',
  components:{ ItemsUi },
  data () {
    return {
    }
  }
}
</script>