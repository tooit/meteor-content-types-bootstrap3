# Meteor Content Type Templates

This file shows the templates provided by the "default" theme. This could be used as a guide to know the default provided variables or to just copy+paste the base template to build your own placed on your app or custom package.

# Table of Contents

- [Introduction](https://github.com/tooit/meteor-content-types/blob/master/TEMPLATES_default.md#Introduction)
- [Shared template helpers](https://github.com/tooit/meteor-content-types/blob/master/TEMPLATES_default.md#shared_template_helpers)
- [Templates](https://github.com/tooit/meteor-content-types/blob/master/TEMPLATES_default.md#templates)
  - [CT_index_bootstrap3_default](https://github.com/tooit/meteor-content-types/blob/master/TEMPLATES_default.md#ct_index_bootstrap3_default)
  - [CT_create_bootstrap3_default](https://github.com/tooit/meteor-content-types/blob/master/TEMPLATES_default.md#ct_create_bootstrap3_default)
  - [CT_read_bootstrap3_default](https://github.com/tooit/meteor-content-types/blob/master/TEMPLATES_default.md#ct_read_bootstrap3_default)
  - [CT_update_bootstrap3_default](https://github.com/tooit/meteor-content-types/blob/master/TEMPLATES_default.md#ct_update_bootstrap3_default)
  - [CT_delete_bootstrap3_default](https://github.com/tooit/meteor-content-types/blob/master/TEMPLATES_default.md#ct_delete_bootstrap3_default)

## Introduction

All templates shares the following naming convension ``CT_[endpoint_key]_[theme_name]_[display_name]``.

The provided templates are used to build Content Type specific templates adding the content type id (ctid) at the end of the template name like ``CT_[endpoint_key]_[theme]_[display]_[ctid]``.

This way you could extend any of the template layers depending your use case.

## Shared template helpers

The following keys will be available on all display templates (not on wrapper templates) by default.

- ``meta.title``: (String) the page title.
- ``meta.summary``: (String) some description.
- ``meta.help``: (String) some useful guidelines.
- ``ct.pathTo.[endpoint_key]``: (String) the name of the route for each endpoint (useful to write links dynamically using ``{{pathFor route='ct.pathTo.index'}}``).
- ``ct.fields``: (Object) array of the fields specified in the collection's schema.
- ``ct.labels``: (Object) key-value labels.

## Templates

List of Meteor templates provided with the default theme.

### CT_index_bootstrap3_default

The default display for ``Index`` endpoint.

```handlebars
<template name="CT_index_bootstrap3_default">
  <div class="panel panel-default">
    <div class="panel-heading">
      <div class="pull-right">
        {{#if ct.pathTo.create}}
          <a href="{{pathFor route=ct.pathTo.create}}" class="btn btn-primary" title="{{ct.labels.linkCreate}}">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </a>
        {{/if}}
        {{#if meta.help}}
          <a class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="{{#if meta.help}}{{meta.help}}{{/if}}">
            <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
          </a>
        {{/if}}
      </div>
      {{#if meta.title}}<h4>{{{meta.title}}}</h4>{{/if}}
    </div>
    {{#if meta.summary}}<div class="panel-body"><p class="text-muted">{{{meta.summary}}}</p></div>{{/if}}
    {{#with items}}
      {{#if total}}
        <div class="table-responsive">
          <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                {{#each ct.fields}}
                  <th abbr="{{ key }}">{{value}}</th>
                {{/each}}
                <th abbr="actions"></th>
              </tr>
            </thead>
            <tbody>
              {{#each cursor}}
                <tr>
                  {{#each ct.fields}}
                    <td abbr="{{value}}">{{ctGetFieldValue .. key}}</td>
                  {{/each}}
                  <td abbr="Actions">
                    {{#if ct.pathTo.update}}
                      <a href="{{pathFor route=ct.pathTo.update}}" class="btn btn-primary btn-sm" title="{{ct.labels.linkEdit}}">
                        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                      </a>
                    {{/if}}
                    {{#if ct.pathTo.read}}
                      <a href="{{pathFor route=ct.pathTo.read}}" class="btn btn-default btn-sm" title="{{ct.labels.linkView}}">
                        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                      </a>
                    {{/if}}
                    {{#if ct.pathTo.delete}}
                      <a href="{{pathFor route=ct.pathTo.delete}}" class="btn btn-link btn-sm" title="{{ct.labels.linkDelete}}">
                        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                      </a>
                    {{/if}}
                  </td>
                </tr>
              {{/each}}
            </tbody>
          </table>
        </div>
      {{/if}}
    {{/with}}
    <div class="panel-footer">
      {{#if items.total}}
        <div class="pull-right">
          {{#if ct.pathTo.create}}
            <a href="{{pathFor route=ct.pathTo.create}}" class="btn btn-primary" title="{{ct.labels.linkCreate}}">
              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </a>
          {{/if}}
          {{#if meta.help}}
            <a class="btn btn-default" data-toggle="tooltip" data-placement="top" title="{{#if meta.help}}{{meta.help}}{{/if}}">
              <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
            </a>
          {{/if}}
        </div>
        <h5>{{ct.labels.totalItemsPrefix}} <strong>{{items.total}}</strong> {{ct.labels.totalItemsSuffix}}</h5>
      {{else}}
        <h5>{{ct.labels.noItemsFound}}</h5>
      {{/if}}
    </div>
  </div>
</template>
```

#### Template helpers

- ``item.cursor``: the mongo document reactive cursor.
- ``item.total``: total document count.
- And the rest of common helpers shared by all Index+CRUD endpoints.

### CT_create_bootstrap3_default

The default display for ``Create`` endpoint.

```handlebars
<template name="CT_create_bootstrap3_default">
  <div class="panel panel-default">
    <div class="panel-heading">
      <div class="pull-right">
        {{#if ct.pathTo.index}}
          <a href="{{pathFor route=ct.pathTo.index}}" class="btn btn-default" title="{{ct.labels.backToIndex}}">
            <span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
          </a>
        {{/if}}
        {{#if meta.help}}
          <a class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="{{#if meta.help}}{{meta.help}}{{/if}}">
            <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
          </a>
        {{/if}}
      </div>
      {{#if meta.title}}<h4>{{{meta.title}}}</h4>{{/if}}
    </div>
    {{#if meta.summary}}<div class="panel-body"><p class="text-muted">{{{meta.summary}}}</p></div>{{/if}}
    {{#autoForm collection=formCollection id=formId type=formType}}
      <div class="panel-body">
        {{> afQuickFields}}
      </div>
      <div class="panel-footer">
        <button type="submit" class="btn btn-primary">Submit</button>
        <a href="{{pathFor route=ct.pathTo.index}}" class="btn btn-link">Cancel</a>
        <button type="reset" class="btn btn-link">Reset</button>
      </div>
    {{/autoForm}}
  </div>
</template>
```

#### Template helpers

- ``formCollection``: the collection associated to be used by autoform package.
- ``formId``: the form id to be used by autoform package.
- ``formType``: the form type to be used by autoform package.
- And the rest of common helpers shared by all Index+CRUD endpoints.

### CT_read_bootstrap3_default

The default display for ``Read`` endpoint.

```handlebars
<template name="CT_read_bootstrap3_default">
  <div class="panel panel-default">
    <div class="panel-heading">
      <div class="pull-right">
        {{#with item}}
          {{#if ct.pathTo.update}}
            <a href="{{pathFor route=ct.pathTo.update}}" class="btn btn-primary" title="{{ct.labels.linkEdit}}">
              <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            </a>
          {{/if}}
        {{/with}}
        {{#if ct.pathTo.index}}
          <a href="{{pathFor route=ct.pathTo.index}}" class="btn btn-default" title="{{ct.labels.backToIndex}}">
            <span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
          </a>
        {{/if}}
        {{#if ct.pathTo.create}}
          <a href="{{pathFor route=ct.pathTo.create}}" class="btn btn-default" title="{{ct.labels.linkCreate}}">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </a>
        {{/if}}
        {{#if meta.help}}
          <a class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="{{#if meta.help}}{{meta.help}}{{/if}}">
            <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
          </a>
        {{/if}}
      </div>
      {{#if meta.title}}<h4>{{{meta.title}}}</h4>{{/if}}
    </div>
    {{#if meta.summary}}<div class="panel-body"><p class="text-muted">{{{meta.summary}}}</p></div>{{/if}}
    {{#with item}}
      <div class="panel-body">
        <dl class="dl-horizontal">
          {{#each ct.fields}}
          <dt>{{value}} <span class="text-muted small">({{key}})</span></dt>
          <dd>{{ctGetFieldValue .. key}}</dd>
          {{/each}}
        </dl>
      </div>
    {{/with}}
  </div>
</template>
```

#### Template helpers

- ``item``: the mongo document about to be deleted.
- And the rest of common helpers shared by all Index+CRUD endpoints.

### CT_update_bootstrap3_default

The default display for ``Update`` endpoint.

```handlebars
<template name="CT_update_bootstrap3_default">
  <div class="panel panel-default">
    <div class="panel-heading">
      <div class="pull-right">
        {{#with item}}
          {{#if ct.pathTo.read}}
            <a href="{{pathFor route=ct.pathTo.read}}" class="btn btn-primary" title="{{ct.labels.linkView}}">
              <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
            </a>
          {{/if}}
        {{/with}}
        {{#if ct.pathTo.index}}
          <a href="{{pathFor route=ct.pathTo.index}}" class="btn btn-default" title="{{ct.labels.backToIndex}}">
            <span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
          </a>
        {{/if}}
        {{#if ct.pathTo.create}}
          <a href="{{pathFor route=ct.pathTo.create}}" class="btn btn-default" title="{{ct.labels.linkCreate}}">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </a>
        {{/if}}
        {{#if meta.help}}
          <a class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="{{#if meta.help}}{{meta.help}}{{/if}}">
            <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
          </a>
        {{/if}}
      </div>
      {{#if meta.title}}<h4>{{{meta.title}}}</h4>{{/if}}
    </div>
    {{#if meta.summary}}<div class="panel-body"><p class="text-muted">{{{meta.summary}}}</p></div>{{/if}}

    {{#if item}}
      {{#autoForm collection=formCollection id=formId type=formType doc=item}}
        <div class="panel-body">
          {{> afQuickFields}}
        </div>
        <div class="panel-footer">
          <button type="submit" class="btn btn-primary">Submit</button>
          <a href="{{pathFor route=ct.pathTo.index}}" class="btn btn-link">Cancel</a>
          <button type="reset" class="btn btn-link">Reset</button>
        </div>
      {{/autoForm}}
    {{/if}}
  </div>
</template>
```

#### Template helpers

- ``item``: the mongo document about to be updated.
- And the rest of common helpers shared by all Index+CRUD endpoints.

### CT_delete_bootstrap3_default

The default display for ``Create`` endpoint.

```handlebars
<template name="CT_delete_bootstrap3_default">
  <div class="panel panel-danger">
    <div class="panel-heading">
      <div class="pull-right">
        {{#with item}}
          {{#if ct.pathTo.read}}
            <a href="{{pathFor route=ct.pathTo.read}}" class="btn btn-primary" title="{{ct.labels.linkView}}">
              <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
            </a>
          {{/if}}
          {{#if ct.pathTo.update}}
            <a href="{{pathFor route=ct.pathTo.update}}" class="btn btn-primary" title="{{ct.labels.linkEdit}}">
              <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            </a>
          {{/if}}
        {{/with}}
        {{#if ct.pathTo.index}}
          <a href="{{pathFor route=ct.pathTo.index}}" class="btn btn-default" title="{{ct.labels.backToIndex}}">
            <span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
          </a>
        {{/if}}
        {{#if ct.pathTo.create}}
          <a href="{{pathFor route=ct.pathTo.create}}" class="btn btn-default" title="{{ct.labels.linkCreate}}">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </a>
        {{/if}}
        {{#if meta.help}}
          <a class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="{{#if meta.help}}{{meta.help}}{{/if}}">
            <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
          </a>
        {{/if}}
      </div>
      {{#if meta.title}}<h4>{{{meta.title}}}</h4>{{/if}}
    </div>
    {{#if meta.summary}}<div class="panel-body"><p class="text-muted">{{{meta.summary}}}</p></div>{{/if}}

    {{#with item}}
      <div class="panel-body">
        <h5>{{ct.labels.deletePrefix}} <strong>{{title}}</strong>.</h5>
        <h4>{{ct.labels.deleteSuffix}}</h4>
        {{#quickRemoveButton collection=formCollection _id=_id class="btn btn-danger"}}
          {{ct.labels.confirmOk}}
        {{/quickRemoveButton}}
      </div>
    {{/with}}
  </div>
</template>
```

#### Template helpers

- ``item``: the mongo document about to be deleted.
- And the rest of common helpers shared by all Index+CRUD endpoints.





















