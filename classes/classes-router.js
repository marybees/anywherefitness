const express = require("express");

const Classes = require("./classes-model");

const router = express.Router();

router.get("/classes", (req, res) => {
  Classes.getAll()
    .then((classes) => {
      res.json(classes);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get classes" });
    });
});

router.get("/classes/:id", (req, res) => {
  const { id } = req.params;

  Classes.getById(id)
    .then((exerciseClass) => {
      if (exerciseClass) {
        res.json(exerciseClass);
      } else {
        res
          .status(404)
          .json({ message: "Could not find class with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get class" });
    });
});

router.post("/dogs", (req, res) => {
  const classData = req.body;

  Dogs.add(classData)
    .then((exerciseClass) => {
      res.status(201).json({ added: exerciseClass });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add new class" });
    });
});

router.put("/classes/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Classes.update(id, changes)
    .then((count) => {
      if (count) {
        res.json({ update: count });
      } else {
        res.status(404).json({ message: "Could not find class with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update class details" });
    });
});

router.delete("/classes/:id", (req, res) => {
  const { id } = req.params;

  Classes.remove(id)
    .then((count) => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: "Could not find class with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete class" });
    });
});

module.exports = router;
