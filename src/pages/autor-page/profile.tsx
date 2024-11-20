import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import authors from "../home/authors/authors";

export function Profile() {
  const { id } = useParams();
  const author = authors.find((author) => author.id === id);

  if (!author) {
    return <p>Author not found.</p>;
  }

  return (
    <div className="mx-auto flex max-w-[70%] items-center justify-center gap-9 rounded-lg border p-6 text-muted-foreground">
      {/* Avatar */}
      <Avatar className="mb-4 h-20 w-20">
        <AvatarImage src="" alt="Jane Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>

      {/* User Information */}
      <div className="">
        <h1 className="mb-2 text-xl font-bold">{author.name}</h1>
        <p className="mb-4 p-0 text-gray-600">{author.bio}</p>

        {/* Social Media Links */}
        <div className="mb-4 flex space-x-4">
          <Button variant="ghost" asChild>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#" aria-label="Facebook">
              <FaFacebook className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#" aria-label="GitHub">
              <FaGithub className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Follow Information */}
        <div className="flex space-x-8 text-sm">
          <div>
            <span className="font-bold">1234</span> Followers
          </div>
          <div>
            <span className="font-bold">567</span> Following
          </div>
        </div>
      </div>
    </div>
  );
}
