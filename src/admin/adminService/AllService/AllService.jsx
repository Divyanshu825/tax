import { useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { Link } from "react-router-dom";

function AllService() {
    const [services, setServices] = useState([
        {
            id: 1,
            serviceName: "Web Development",
            title: "Full Stack",
            description: "We create modern web applications",
            image: "data:image/jpeg;base64,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", // Placeholder Image
            points: ["Responsive Design", "SEO Optimized", "Fast Performance"],
        },
    ]);

    // 🗑 Delete Function
    const deleteService = (id) => {
        setServices(services.filter((service) => service.id !== id));
    };

    // ✏️ Update Function (Just for Example)
    const updateService = (id) => {
        alert(`Update Service ID: ${id}`);
    };

    return (
        <div className="p-8">
            <Button variant="contained" component={Link} to="/admin-panel/AddServices">
               Add Services
            </Button>
            <h2 className="text-2xl font-bold mb-6 justify-self-center flex" >Service List</h2>

            <Table border="1">
                <TableHead>
                    <TableRow style={{ backgroundColor: "#f5f5f5" }}>
                        <TableCell>S no.</TableCell>
                        <TableCell>Service Name</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Points</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services.map((service, index) => (
                        <TableRow key={service.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{service.serviceName}</TableCell>
                            <TableCell>{service.title}</TableCell>
                            <TableCell>{service.description}</TableCell>
                            <TableCell>
                                <img src={service.image} alt="Service" width="50" height="50" />
                            </TableCell>
                            <TableCell>
                                <ul>
                                    {service.points.map((point, idx) => (
                                        <li key={idx}>• {point}</li>
                                    ))}
                                </ul>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => updateService(service.id)}
                                    style={{ marginRight: "8px" }}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    size="small"
                                    onClick={() => deleteService(service.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default AllService;
