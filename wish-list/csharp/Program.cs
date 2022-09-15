using System;
using System.Collections.Generic;

Console.WriteLine("My wishes...");
List<Wish> allWishes = GetWishes();
foreach(Wish singleWish in allWishes)
{
    Console.WriteLine(singleWish.WishDescription);
}

//function to make wishes
List<Wish> GetWishes()
{
List<Wish> wishList = new List<Wish> {
    new Wish {
        WishDescription = "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'"
    },
    new Wish {
        WishDescription = "The ability to think of interesting wishes on short notice"
    },
    new Wish {
        WishDescription = "A washtub of Skittles"
    },
    new Wish {
        WishDescription = "World peace, but not the kind of world peace where humans are removed from existance"
    },
    new Wish {
        WishDescription = "A TV that is NOT internet-capable"
    },
    new Wish {
        WishDescription = "The ability to fly but, like, really fast... not just, like, how fast I can walk, but, like, fast, you know?"
    }
};
return wishList;
};
public class Wish
{
    public string WishDescription {get; set;}
}
