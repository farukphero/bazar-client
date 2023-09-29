import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { HiUserCircle, HiCog } from "react-icons/hi";
import {
  HiPower,
  HiListBullet,
  HiChatBubbleBottomCenterText,
  HiNewspaper,
  HiPresentationChartBar
} from "react-icons/hi2";
import { FaMotorcycle } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar({ userName }: { userName: string }) {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Hello, {userName}
        </Typography>
      </div>
      <List>
        <Link href={"/my-account"}>
          <ListItem>
            <ListItemPrefix>
              <HiPresentationChartBar className="h-5 w-5" />
            </ListItemPrefix>
            Account
          </ListItem>
        </Link>
        <Link href={"/my-account/profile"}>
          <ListItem>
            <ListItemPrefix>
              <HiUserCircle className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </Link>
        <Link href={"/my-account/settings"}>
          <ListItem>
            <ListItemPrefix>
              <HiCog className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
        </Link>
        <Link href={"/my-account/orders"}>
          <ListItem>
            <ListItemPrefix>
              <HiListBullet className="h-5 w-5" />
            </ListItemPrefix>
            Orders
          </ListItem>
        </Link>
        <Link href={"/my-account/reviews"}>
          <ListItem>
            <ListItemPrefix>
              <HiChatBubbleBottomCenterText className="h-5 w-5" />
            </ListItemPrefix>
            Reviews
          </ListItem>
        </Link>
        <Link href={"/my-account/apply"}>
          <ListItem>
            <ListItemPrefix>
              <FaMotorcycle className="h-5 w-5" />
            </ListItemPrefix>
            Apply as rider
          </ListItem>
        </Link>
        <Link href={"/my-account/send"}>
          <ListItem>
            <ListItemPrefix>
              <HiNewspaper className="h-5 w-5" />
            </ListItemPrefix>
            Send us CV
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <HiPower className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
