
# Domain | Comify docs

The domain contains the implementation of all business related components. It leverages a procedural approach using [Jitar](https://jitar.dev).

## Module structure

We're using a modular composable approach. Our module structure looks like this.

<img width="1102" alt="Web UI module structure" src="../assets/images/domain/modules.png">

Basically it boils down to a module per domain concept. Each module contains its related logic and data components.

## Component model

Functions are used as building blocks for logic components. Classes are only used for creating immutable data models. Each component is placed in it's own file that has the exact same name as the component.

### Business logic

The root of every module contains its use-cases. For example, the comic module has the `create` function for creating a comic.

Use-case functions manage the execution of a single process. They know all the process steps and delegate the execution of every step to an expert function. For example, the comic `create` function has two steps:

1. Create an image
1. Store the data

Both tasks are implemented in other functions. The image creation is implemented in the image module and gets imported from there. Storing the data is a local task and gets imported from the data submodule.

In this example we want both actions to succeed or fail together. To keep our data consistent we use the [SAGA pattern](https://microservices.io/patterns/data/saga.html) as described in the [Jitar documentation](https://docs.jitar.dev/develop/data-consistency.html).

The result can be of any type. We use view objects for returning alternative data objects. These are imported from the view submodule.

### Data

The data submodule contains the data model and all its CRUD related functions.

For scalability we only work with immutable data. For this we create the models as classes with private fields and getters for reading the field values. We also add mutation functions that return a copy of the model with the updated field value(s).

All CRUD functions use the database implementation from the integrations. We use this basic pattern:

* **Create** functions take field values as separate arguments and return a data model object;
* **Retrieve** functions take (a) selection value(s) as argument(s) and returns the retrieved data model object(s);
* **Update** functions take a object data model as input and doesn't return anything;
* **Delete** functions take the object id as input and doesn't return anything.

For mapping the record data to a model we create a `mapRecord` function that takes the record as input and return a model instance.

**Note:** We don't support joins to ensure scalability of the data model.

### Views

The view submodule contains alternative views on the data models. We use them for hiding, transforming or complimenting data. For example, the image view returns the image content as data url, while the image data object contains the file name and storage key.

We also use views for aggregating data. For example, the post view contains views for its creator view and comic. These sub views contain all relevant data like the comic image.

For making views we create a `createView` function that does all the necessary work like loading views from other modules, transforming field values, etc..
