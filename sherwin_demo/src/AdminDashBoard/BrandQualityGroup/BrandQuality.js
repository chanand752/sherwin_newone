// Parent Brand Quality
import SearchBrandQuality from "./SearchBrandQuality";
import Grid from '@mui/material/Grid';
// import BrandQualityNavbar from "./BrandQualitynavbar";


export default function AdminPage() {
    return (
        <Grid container spacing={12}>
        <Grid item xs={12} md={12} sm={12}> 
        <div>
            <SearchBrandQuality />
            {/* < BrandQualityNavbar name="Anand" /> */}
        </div>
        </Grid>
        </Grid>
    )
}