import React from "react";

const recentPosts = [
  {
    id: 1,
    title: "Top Builders in Indore",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
  },
  {
    id: 2,
    title: "Best Property Brokers Near You",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
  },
  {
    id: 3,
    title: "Luxury Apartments Investment Guide",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800",
  },
];

const Recent = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 animate-fadeIn">
      {/* BLOG label */}
      <p className="text-center text-sm font-semibold tracking-widest text-gray-500 mb-2">
        BLOG
      </p>

      {/* Title */}
      <h2
        className="
          font-roboto
          font-medium
          text-[46px]
          leading-[55px]
          text-black
          mb-10
          border-b
          pb-3
          text-center
        "
      >
        Recent Posts
      </h2>

      {/* Animated Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recentPosts.map((post, index) => (
          <div
            key={post.id}
            className="
              group
              cursor-pointer
              overflow-hidden
              rounded-2xl
              shadow-lg
              transform
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              animate-slideUp
            "
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="
                  w-full
                  h-[360px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Dark Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/40
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              ></div>

              {/* Text Overlay */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-5
                  translate-y-8
                  opacity-0
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              >
                <h4 className="text-white text-xl font-semibold">
                  {post.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
