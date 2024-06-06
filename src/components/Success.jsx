
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h2>Giriş Başarılı</h2>
      <Button color="primary" onClick={() => navigate('/')}>
        Geri Dön
      </Button>
    </div>
  );
}
