import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  AvatarGroup,
  AvatarGroupTooltip,
} from '@/registry/components/avatar-group-mask';

const AVATARS = [
  {
    src: 'https://pbs.twimg.com/profile_images/1909615404789506048/MTqvRsjo_400x400.jpg',
    fallback: 'SK',
    tooltip: 'Skyleen',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg',
    fallback: 'CN',
    tooltip: 'Shadcn',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg',
    fallback: 'AW',
    tooltip: 'Adam Wathan',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg',
    fallback: 'GR',
    tooltip: 'Guillermo Rauch',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg',
    fallback: 'JH',
    tooltip: 'Jhey',
  },
];

export const AvatarGroupMaskBottomDemo = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-0.5 rounded-full">
      <div className="bg-gradient-to-r from-indigo-100 dark:from-indigo-950 from-10% via-sky-100 dark:via-sky-950 via-30% to-emerald-100 dark:to-emerald-950 to-90% p-1.5 rounded-full">
        <AvatarGroup
          invertOverlap
          align="start"
          translate={50}
          tooltipProps={{ side: 'bottom', sideOffset: 10 }}
        >
          {AVATARS.map((avatar, index) => (
            <Avatar key={index}>
              <AvatarImage src={avatar.src} />
              <AvatarFallback>{avatar.fallback}</AvatarFallback>
              <AvatarGroupTooltip>
                <p>{avatar.tooltip}</p>
              </AvatarGroupTooltip>
            </Avatar>
          ))}
        </AvatarGroup>
      </div>
    </div>
  );
};
