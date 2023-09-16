const actions =
[
    {
        time: 0,
        x: 10,
        y: 0,
    },
    {
        time: 4,
        x: 200,
        y: 100,
    },
    {
        time: 3,
        x: 400,
        y: 0,
    },
    {
        time: 9,
        x: -20,
        y: 100,
    },
]

const scene =
{
    Background: "A cozy, well-lit kitchen with pots and pans hanging overhead, a wooden table in the center, and a refrigerator to the right",
    Characters: [
        {
            Type: "Human",
            Description: "A male robber, dressed in all black with a mask and a sack",
            Size: "25%",
            Actions: [
                {
                    Position: "10%, 50%",
                    Time: "0 seconds"
                },
                {
                    Position: "50%, 50%",
                    Time: "2 seconds"
                }
            ]
        },
        {
            Type: "Human",
            Description: "A mother, dressed in an apron, holding a frying pan",
            Size: "25%",
            Actions: [
                {
                    Position: "80%, 50%",
                    Time: "0 seconds"
                },
                {
                    Position: "50%, 50%",
                    Time: "3 seconds"
                }
            ]
        }
    ]
}

const scenes = [ scene, scene, scene ]

export default function VideoAnimate({ setPosition }) {
    return (
        <div className="absolute aspect-video bg-300 w-[75vw] flex justify-center items-end overflow-hidden">

        </div>
    )
}