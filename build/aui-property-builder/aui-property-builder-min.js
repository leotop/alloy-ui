YUI.add("aui-property-builder",function(e,t){var n=e.Lang,r=n.isArray,i=n.isNumber,s=n.isObject,o=function(t){return e.instanceOf(t,e.PropertyBuilderAvailableField)},u=e.Array,a=e.getClassName,f=a("clearfix"),l=a("property","builder","canvas"),c=a("property","builder","content","container"),h=a("property","builder","drop","container"),p=e.getClassName("property","builder","field","draggable"),d=a("property","builder","fields","container"),v=a("layout"),m=e.Component.create({NAME:"property-builder",ATTRS:{availableFields:{setter:"_setAvailableFields",validator:r},availableFieldsDragConfig:{value:null,setter:"_setAvailableFieldsDragConfig",validator:s},canvas:{valueFn:function(){return e.Node.create(this.CANVAS_TEMPLATE)}},dropConfig:{value:null,setter:"_setDropConfig",validator:s},contentContainer:{valueFn:function(){return e.Node.create(this.CONTENT_CONTAINER_TEMPLATE)}},dropContainer:{valueFn:function(){return e.Node.create(this.DROP_CONTAINER_TEMPLATE)}},fieldsContainer:{valueFn:function(){return e.Node.create(this.FIELDS_CONTAINER_TEMPLATE)}}},HTML_PARSER:{contentContainer:"."+c,dropContainer:"."+h,fieldsContainer:"."+d,canvas:"."+l},UI_ATTRS:["availableFields","fields"],AUGMENTS:[e.PropertyBuilderFieldSupport,e.PropertyBuilderSettings],prototype:{CANVAS_TEMPLATE:'<div tabindex="1" class="'+l+'"></div>',CONTENT_CONTAINER_TEMPLATE:'<div class="'+c+'"></div>',DROP_CONTAINER_TEMPLATE:'<div class="'+h+'"></div>',FIELDS_CONTAINER_TEMPLATE:'<ul class="'+[d,f].join(" ")+'"></ul>',fieldsNode:null,settingsNode:null,initializer:function(){var e=this;this.publish("render"),e.after({render:e._afterRender,"model:change":e._afterModelChange}),e.after(e._afterUiSetHeight,e,"_uiSetHeight"),e.canvas=e.get("canvas"),e.contentContainer=e.get("contentContainer"),e.dropContainer=e.get("dropContainer"),e.fieldsContainer=e.get("fieldsContainer")},isAvailableFieldsDrag:function(e){var t=this,n=t.availableFieldsDrag;return e===n.dd},plotFields:function(){var e=this,t=e.get("fields");t.each(function(t){e.plotField(t)})},renderUI:function(){var e=this;e.fire("render"),e._renderCanvas(),e._uiSetAvailableFields(e.get("availableFields"))},syncUI:function(){var e=this,t=e.get("contentBox");e._setupDrop(),e._setupAvailableFieldsDrag(),t.addClass(v)},_afterRender:function(){var e=this;e.plotFields()},_afterUiSetHeight:function(e){var t=this;t.contentContainer.setStyle("height",i(e)?e+t.DEF_UNIT:e),t.dropContainer.setStyle("height",i(e)?e+t.DEF_UNIT:e)},_renderCanvas:function(){var e=this,t=e.get("contentBox"),n=e.canvas,r=e.contentContainer,i=e.dropContainer;n.inDoc()||r.appendChild(n),i.inDoc()||n.appendChild(i),r.inDoc()?r.get("parentNode").append(r):t.appendChild(r)},_setupDrop:function(){var t=this;t.drop=new e.DD.Drop(t.get("dropConfig"))},_setupAvailableFieldsDrag:function(){var t=this;t.availableFieldsDrag=new e.DD.Delegate(t.get("availableFieldsDragConfig"))},_setAvailableFields:function(t){var n=[];return u.each(t,function(t){n.push(o(t)?t:new e.PropertyBuilderAvailableField(t))}),n},_setDropConfig:function(t){var n=this;return e.merge({bubbleTargets:n,groups:["availableFields"],node:n.dropContainer},t||{})},_setAvailableFieldsDragConfig:function(t){var n=this;return e.merge({bubbleTargets:n,container:n.get("boundingBox"),dragConfig:{groups:["availableFields"],plugins:[{cfg:{moveOnEnd:!1},fn:e.Plugin.DDProxy}]},nodes:"."+p},t||{})},_uiSetAvailableFields:function(t){var n=this,r=n.fieldsNode;if(r){var i=e.getDoc().invoke("createDocumentFragment");u.each(t,function(e){i.appendChild(e.get("node"))}),r.setContent(n.fieldsContainer.setContent(i))}},_uiSetFields:function(){var e=this;e.get("rendered")&&e.plotFields()}}});e.PropertyBuilder=m},"3.0.3-deprecated.24",{requires:["dd","collection","aui-property-builder-available-field","aui-property-builder-field-support","aui-property-builder-settings","aui-tabview"],skinnable:!0});
