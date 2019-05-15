import { Node, ElementType } from "../interfaces/node";

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
