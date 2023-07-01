var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const authenticateToken = require("../../../middleware/userAuth");
const prisma = new PrismaClient();
/* GET users listing. */
router.get("/", function (req, res, next) {
  const levels = prisma.level.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      subTitlte: true,
      image: true,
      status: true,
      requiredScore: true,
      exercises: {
        select: {
          id: true,
          title: true,
          description: true,
          image: true,
          video: true,
          instructions: true,
          status: true,
          questions: {
            select: {
              id: true,
              title: true,
              image: true,
              type: true,
            },
          },
          advice: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      },
      subLevels: {
        select: {
          id: true,
          name: true,
          description: true,
          subTitlte: true,
          image: true,
          status: true,
          requiredScore: true,
          exercises: {
            select: {
              id: true,
              title: true,
              description: true,
              image: true,
              video: true,
              instructions: true,
              status: true,
              questions: {
                select: {
                  id: true,
                  title: true,
                  image: true,
                  type: true,
                },
              },
              advice: {
                select: {
                  id: true,
                  title: true,
                  image: true,
                },
              },
            },
          },
          subSubLevels: {
            select: {
              id: true,
              name: true,
              description: true,
              subTitlte: true,
              image: true,
              status: true,
              requiredScore: true,
              exercises: true,
              finalLevel: {
                select: {
                  id: true,
                  name: true,
                  status: true,
                  requiredScore: true,
                  image: true,
                  exercises: true,
                  // select all food wehre foodId = food.id
                  foods: {
                    select: {
                      id: true,
                      title: true,
                      image: true,
                      description: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  levels.then((data) => {
    res.json(data);
  });
});

module.exports = router;
