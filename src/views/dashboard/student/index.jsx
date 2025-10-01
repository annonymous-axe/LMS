import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid2';

// project imports
import PrimaryCard from './EarningCard';
import TotalIncomeDarkCard from '../../../ui-component/cards/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../../../ui-component/cards/TotalIncomeLightCard';

import { gridSpacing } from 'store/constant';

// assets
import { Award } from 'lucide-react';
import { IconSchool, IconChalkboard } from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';
import TopScoringChart from './TopStudentsChart';
import UpcomingEvents from './upcomingEvents';

// ==============================|| DEFAULT DASHBOARD ||============================== //

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);

  const theme = useTheme();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={12}>
        <Grid container spacing={gridSpacing}>
          <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
            <PrimaryCard 
              isLoading={isLoading} 
              total={1} 
              label='Total Courses'
              icon={<IconSchool color='white' sx={{ width: 20, height: 20 }}/>}
              background={theme.palette.secondary[800]}
            />
          </Grid>
          <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
            <PrimaryCard 
              isLoading={isLoading} 
              total={1} 
              label='Total Batches' 
              icon={<IconChalkboard color='white' sx={{ width: 20, height: 20 }} />}
              bgcolor='primary.dark'
              background={theme.palette.primary[800]}
            />
          </Grid>
          <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>
            <Grid container spacing={gridSpacing}>
              <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>
                <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    total: 0,
                    label: 'Total Certificates',
                    icon: <Award fontSize="inherit" />
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container spacing={gridSpacing}>
          <Grid size={{ xs: 12, md: 8 }}>
            <TopScoringChart />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <UpcomingEvents />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
