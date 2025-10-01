import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid2';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../../../ui-component/cards/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../../../ui-component/cards/TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import PrimaryCard from '../student/PrimaryCard';

import { gridSpacing } from 'store/constant';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { IconChalkboard, IconSchool } from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';

// ==============================|| DEFAULT DASHBOARD ||============================== //

export default function Dashboard() {

  const theme = useTheme();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={12}>
        <Grid container spacing={gridSpacing}>
          <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>
            <Grid container spacing={gridSpacing}>
              {/* <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid> */}
              <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>
                <PrimaryCard 
                  isLoading={isLoading} 
                  total={39} 
                  label='Total Courses' 
                  icon={<IconChalkboard color='white' sx={{ width: 20, height: 20 }} />}
                  bgcolor='warning.main'
                  background={theme.palette.warning.dark}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container spacing={gridSpacing}>
          <Grid size={{ xs: 12, md: 8 }}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
