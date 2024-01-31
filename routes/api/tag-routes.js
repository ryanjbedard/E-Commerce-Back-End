const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await tag.findAll({
      include: [{ model: Tag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id);
    if (!tagData) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  function addTag() {
    db.findAllTags()
      .then(([rows]) => {
        let tags = rows;
        const tagChoices = tags.map(({ id, name }) => ({
          name: name,
          value: id
        }));
  
        prompt([
          {
            name: "title",
            message: "What is the name of the tag?"
          },
        ])
          .then(role => {
            db.createTag(Tag)
              .then(() => console.log(`Added ${tag.title} to the database`))
              .then(() => loadMainPrompts())
          })
      })
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!TagData[0]) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const tagData = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!tagData) {
        res.status(404).json({ message: 'No tag with this id!' });
        return;
      }
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

module.exports = router;
