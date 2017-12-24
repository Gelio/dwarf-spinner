import { ProjectionService } from 'services/ProjectionService';

describe('ProjectionService', () => {
  describe('createProjectionMatrix', () => {
    it('should return a projection matrix', () => {
      const projectionService = new ProjectionService();

      const projectionMatrix = projectionService.createProjectionMatrix(45, 1.5, 0.1, 1000);
      expect(projectionMatrix).toMatchSnapshot();
    });
  });
});
