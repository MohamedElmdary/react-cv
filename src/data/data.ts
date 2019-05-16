import { Node, ElementType } from "../interfaces/node";
import { Children } from "react";

export const experience: Node[] = [
  {
    content: [
      {
        elementType: ElementType.H1,
        value: "Volunteering"
      }
    ],
    children: [
      {
        content: [
          {
            elementType: ElementType.H2,
            value: "Teams"
          }
        ],
        children: [
          {
            content: [
              {
                elementType: ElementType.P,
                value: "Member at"
              },
              {
                elementType: ElementType.A,
                value:
                  "Cat Reloaded-https://www.facebook.com/groups/293637297951705/"
              },
              {
                elementType: ElementType.P,
                value: "front end circle."
              }
            ]
          }
        ]
      },
      {
        content: [
          {
            elementType: ElementType.H2,
            value: "Public Speaker"
          }
        ],
        children: [
          {
            content: [
              {
                elementType: ElementType.H3,
                value: "Getting started at angular & react"
              }
            ],
            children: [
              {
                content: [
                  {
                    elementType: ElementType.P,
                    value: "Resources"
                  },
                  {
                    elementType: ElementType.A,
                    value:
                      "https://github.com/MohamedElmdary/frameworks-presentation"
                  }
                ]
              },
              {
                content: [
                  {
                    elementType: ElementType.P,
                    value: "Advertisement"
                  },
                  {
                    elementType: ElementType.A,
                    value:
                      "https://www.facebook.com/events/304902843525155/permalink/305738960108210/"
                  }
                ]
              }
            ]
          },
          {
            content: [
              {
                elementType: ElementType.H3,
                value: "Asynchronous code on javascript"
              }
            ],
            children: [
              {
                content: [
                  {
                    elementType: ElementType.P,
                    value: "Resources"
                  },
                  {
                    elementType: ElementType.A,
                    value:
                      "https://github.com/MohamedElmdary/js-async-presentation"
                  }
                ]
              },
              {
                content: [
                  {
                    elementType: ElementType.P,
                    value: "Main points"
                  }
                ],
                children: [
                  {
                    content: [
                      {
                        elementType: ElementType.P,
                        value: "Callbacks"
                      }
                    ]
                  },
                  {
                    content: [
                      {
                        elementType: ElementType.P,
                        value: "Promises"
                      }
                    ]
                  },
                  {
                    content: [
                      {
                        elementType: ElementType.P,
                        value: "Async/Await"
                      }
                    ]
                  },
                  {
                    content: [
                      {
                        elementType: ElementType.P,
                        value: "Observables"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

function genP(value: string): Node {
  return {
    content: [
      {
        elementType: ElementType.P,
        value
      }
    ]
  };
}

export const skills: Node[] = [
  {
    content: [
      {
        elementType: ElementType.H1,
        value: "Front end"
      }
    ],
    children: [
      genP("Html"),
      genP("Css"),
      genP("Javascript - es6"),
      {
        content: [
          {
            elementType: ElementType.H2,
            value: "Frameworks"
          }
        ],
        children: [
          genP("Angular"),
          genP("Vuejs"),
          genP("Bootstrap"),
          genP("Materialize")
        ]
      },
      {
        content: [
          {
            elementType: ElementType.H2,
            value: "Libraries"
          }
        ],
        children: [
          genP("React"),
          genP("React Native"),
          genP("Rxjs"),
          genP("JQuery")
        ]
      }
    ]
  },
  {
    content: [
      {
        elementType: ElementType.H1,
        value: "Back end"
      }
    ],
    children: [
      genP("Nodejs"),
      genP("Mongodb"),
      genP("Mysql"),
      {
        content: [
          {
            elementType: ElementType.H2,
            value: "Frameworks"
          }
        ],
        children: [genP("Express"), genP("Nestjs")]
      },
      {
        content: [
          {
            elementType: ElementType.H2,
            value: "Libraries"
          }
        ],
        children: [genP("Mongoose"), genP("Passport")]
      }
    ]
  },
  {
    content: [
      {
        elementType: ElementType.H1,
        value: "Tools"
      }
    ],
    children: [
      {
        content: [
          {
            elementType: ElementType.H2,
            value: "Back end"
          }
        ],
        children: [genP("Graphql"), genP("Prisma")]
      },
      {
        content: [
          {
            elementType: ElementType.H2,
            value: "Testing"
          }
        ],
        children: [genP("Jest"), genP("Mocha")]
      },
      {
        content: [
          {
            elementType: ElementType.H2,
            value: "Webpack"
          }
        ]
      },
      {
        content: [
          {
            elementType: ElementType.H2,
            value: "Css preprocessor"
          }
        ],
        children: [genP("Sass")]
      },
      {
        content: [
          {
            elementType: ElementType.H2,
            value: "Html template engines"
          }
        ],
        children: [genP("Ejs"), genP("Pug/Jade")]
      }
    ]
  }
];

export const projects: Node[] = [
  {
    content: [
      {
        elementType: ElementType.H2,
        value: "Mern Blog - "
      },
      {
        elementType: ElementType.A,
        value: "https://react-socialapp.herokuapp.com/"
      }
    ],
    children: [
      {
        content: [
          {
            elementType: ElementType.P,
            value: "Source"
          },
          {
            elementType: ElementType.A,
            value: "https://gitlab.com/engm5081/Mern-Stack-Blog"
          }
        ]
      },
      {
        content: [
          {
            elementType: ElementType.H3,
            value: "Technologies"
          }
        ],
        children: [genP("React"), genP("Express"), genP("Mongoose")]
      }
    ]
  },
  {
    content: [
      {
        elementType: ElementType.H2,
        value: "Mean Market -  "
      },
      {
        elementType: ElementType.A,
        value: "https://gitlab.com/engm5081/e-market"
      }
    ],
    children: [
      {
        content: [
          {
            elementType: ElementType.P,
            value: "Source"
          },
          {
            elementType: ElementType.A,
            value: "https://gitlab.com/engm5081/e-market"
          }
        ]
      },
      {
        content: [
          {
            elementType: ElementType.H3,
            value: "Technologies"
          }
        ],
        children: [genP("Angular 6"), genP("Express"), genP("Mongoose")]
      }
    ]
  },
  {
    content: [
      {
        elementType: ElementType.H2,
        value: "Dependancy injection"
      }
    ],
    children: [
      {
        content: [
          {
            elementType: ElementType.P,
            value: "Source"
          },
          {
            elementType: ElementType.A,
            value: "https://github.com/MohamedElmdary/dependencyInjection"
          }
        ]
      },
      {
        content: [
          {
            elementType: ElementType.H3,
            value: "Technologies"
          }
        ],
        children: [genP("Typescript"), genP("Reflect Metadata")]
      }
    ]
  },
  {
    content: [
      {
        elementType: ElementType.H2,
        value: "Nami app Landing page -  "
      },
      {
        elementType: ElementType.A,
        value: "https://nami-dtbt.netlify.com/"
      }
    ],
    children: [
      {
        content: [
          {
            elementType: ElementType.P,
            value: "Source"
          },
          {
            elementType: ElementType.A,
            value: "https://themeforest.net/item/nami-app-landing-page/21464019"
          }
        ]
      },
      {
        content: [
          {
            elementType: ElementType.H3,
            value: "Technologies"
          }
        ],
        children: [genP("Pug/jade"), genP("Sass"), genP("JQuery")]
      }
    ]
  },
  {
    content: [
      {
        elementType: ElementType.H2,
        value: "Meruem | Personal Portfolio HTML5 Template -  "
      },
      {
        elementType: ElementType.A,
        value: "https://meruem.netlify.com/"
      }
    ],
    children: [
      {
        content: [
          {
            elementType: ElementType.P,
            value: "Source"
          },
          {
            elementType: ElementType.A,
            value:
              "https://themeforest.net/item/meruem-personal-portfolio-html5-template/21178363"
          }
        ]
      },
      {
        content: [
          {
            elementType: ElementType.H3,
            value: "Technologies"
          }
        ],
        children: [
          genP("Html 5"),
          genP("Css"),
          genP("Javascript"),
          genP("JQuery")
        ]
      }
    ]
  }
];
